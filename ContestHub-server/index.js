const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// token verify
const verifyToken = async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) {
        return res.status(401).send({ message: 'unauthorized' });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized' });
        }

        req.user = decoded;
        next();
    });
};

//mongodb fun start
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@wpseemol.l30sqti.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        const contestHub = client.db('contestHub');

        // all collection
        const userCollection = contestHub.collection('users');
        const contestsCollection = contestHub.collection('contests');

        //verify Contest Creator
        const verifyContestCreator = async (req, res, next) => {
            const query = {
                uEmail: req?.user?.email,
            };
            const options = {
                projection: {
                    role: 1,
                },
            };
            const result = await userCollection.findOne(query, options);

            if (result.role === 'contest-creator') {
                next();
            } else {
                return res
                    .status(401)
                    .send({ message: 'You have no permission' });
            }
        };
        //verify Contest Creator
        const verifyAdmin = async (req, res, next) => {
            const query = {
                uEmail: req?.user?.email,
            };
            const options = {
                projection: {
                    role: 1,
                },
            };
            const result = await userCollection.findOne(query, options);

            if (result.role === 'admin') {
                next();
            } else {
                return res
                    .status(401)
                    .send({ message: 'You have no permission' });
            }
        };

        //contest add
        app.get(
            '/contests',
            verifyToken,
            verifyContestCreator,
            async (req, res) => {
                const creatorContest = req?.query?.email;

                const query = { 'author.email': creatorContest };

                const result = await contestsCollection.find(query).toArray();
                res.send(result);
            }
        );

        app.get('/contests/:category', async (req, res) => {
            const contestCategory = req.params.category;

            const query = { contestType: contestCategory };

            const result = await contestsCollection.find(query).toArray();
            res.send(result);
        });

        //contest add
        app.post(
            '/contests',
            verifyToken,
            verifyContestCreator,
            async (req, res) => {
                const contest = req.body;
                const result = await contestsCollection.insertOne(contest);
                res.send(result);
                console.log('Add contest successful');
            }
        );

        //payment intent
        app.post('/create-payment-intent', async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price * 100);

            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ['card'],
            });

            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        });

        // contest deleted
        app.delete(
            '/contests/:id',
            verifyToken,
            verifyContestCreator,
            async (req, res) => {
                const contestRemoveId = req.params.id;

                const query = {
                    _id: new ObjectId(contestRemoveId),
                };
                const result = await contestsCollection.deleteOne(query);
                res.send(result);
                console.log('contest deleted successful');
            }
        );

        // User registration
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const userEmail = newUser.uEmail;

            const existingUser = await userCollection.findOne({
                uEmail: userEmail,
            });

            if (existingUser) {
                res.status(409).json({
                    error: 'User with this email already exists.',
                });
            } else {
                const result = await userCollection.insertOne(newUser);
                res.send(result);
                console.log('User Created Success');
            }
        });

        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { uEmail: user.uEmail };
            const updateDoc = {
                $set: {
                    role: user.role,
                },
            };
            const result = await userCollection.updateOne(filter, updateDoc);
            res.send(result);
        });
        // User registration

        // user role
        app.get('/user-role', verifyToken, async (req, res) => {
            const email = req?.user?.email;

            const query = {
                uEmail: email,
            };
            const options = {
                projection: {
                    role: 1,
                },
            };
            const result = await userCollection.findOne(query, options);
            res.send(result);
        });

        // jwt created start
        app.post('/jwt', async (req, res) => {
            const user = req.body;

            const token = jwt.sign(user, process.env.SECRET, {
                expiresIn: '30d',
            });

            res.cookie('access-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            }).send({ success: true });
        });

        // cookie remove
        app.post('/logout', (req, res) => {
            // Clear the 'access-token' cookie
            res.cookie('access-token', '', {
                expires: new Date(0),
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            });

            res.send({ success: true });
        });

        // jwt created end
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

//mongodb fun end

app.get('/', (req, res) => {
    res.send('ContestHub Server ...');
});

app.listen(port, () => {
    console.log(`ContestHub Server is running on port ${port}`);
});
