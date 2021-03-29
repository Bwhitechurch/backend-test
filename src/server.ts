import express from 'express';
import apiV1 from './api/v1/index';

// Set any environment variables
require('dotenv').config();

// Set up a connection to firestore (or the firestore emulator)
const initFirestore = () => {
    const admin = require('firebase-admin');

    const serviceAccount = require('../serviceAccountKey.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
};

// Configure and start an express server on localhost
const startServer = () => {
    initFirestore();

    const server = express();
    const hostname = '127.0.0.1';
    const port = 3000;

    const bodyParser = require('body-parser');
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    apiV1(server);

    server.listen(port, hostname, () => {
        return console.log(`server is listening on ${port}`);
    }).on('error', (error) => {
        return console.error(error);
    });
};

startServer();
