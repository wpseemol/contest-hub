const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

        //post Operations
        app.post('/users', async (req, res) => {
            const user = request.body;
        });
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
