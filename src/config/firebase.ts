import {AssetStatus, AssetType} from '../models/asset';
import {createAsset} from '../services/asset';
import {createStaff} from '../services/staff';

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

const populateDatabase = async () => {
    // Populate some mock assets
    await createAsset({
        active: true,
        status: AssetStatus.RETURNED,
        notes: '',
        serial: '083-4577-9214-015',
        type: AssetType.PHONE,
    });
    await createAsset({
        active: true,
        status: AssetStatus.RETURNED,
        notes: '',
        serial: '013-7281-9991-019',
        type: AssetType.PHONE,
    });
    await createAsset({
        active: true,
        status: AssetStatus.RETURNED,
        notes: 'This is a note',
        serial: '123-4567-8902-012',
        type: AssetType.VESA,
    });
    await createAsset({
        active: true,
        status: AssetStatus.RETURNED,
        notes: '',
        serial: '098-7654-3210-123',
        type: AssetType.SCREEN,
    });
    await createAsset({
        active: true,
        status: AssetStatus.RETURNED,
        notes: '',
        serial: '12345',
        type: AssetType.CHARGER,
    });

    // Populate some mock staff
    await createStaff({
        admin: true,
        email: 'fake@fake.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '0411189213',
    });
    await createStaff({
        admin: true,
        email: 'jane@fake.com',
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '54372198',
    });
    await createStaff({
        admin: false,
        email: 'fredie@fake.com',
        firstName: 'Freddie',
        lastName: 'Noname',
        phone: '0467513153',
    });
    await createStaff({
        admin: false,
        email: 'derp@fake.com',
        firstName: 'Silly',
        lastName: 'Person',
        phone: '54281234',
    });
    await createStaff({
        admin: true,
        email: 'michael@fake.com',
        firstName: 'Michael',
        lastName: 'Scarn',
        phone: '99999999',
    });
};

populateDatabase();
