import express from 'express';
import apiV1 from './api/v1/index';

const initFirestore = () => {
    const admin = require('firebase-admin');

    const serviceAccount = require('../serviceAccountKey.json');

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const startServer = () => {
    initFirestore();

    const server = express();
    const hostname = '127.0.0.1';
    const port = 3000;

    apiV1(server);

    server.listen(port, hostname, () => {
        return console.log(`server is listening on ${port}`);
    }).on('error', (error) => {
        return console.error(error);
    });
};

// Set any environment variables
require('dotenv').config();

startServer();
