// Set any environment variables
require('dotenv').config();

// Set up a connection to firestore (or the firestore emulator)
const admin = require('firebase-admin');

const serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export {db};
