const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
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
const { MongoClient, ServerApiVersion } = require('mongodb');
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
            }

            console.log('User Created Success');
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
