
import {db} from '../config/firebase';

const getDocument = async (collectionName: String, id: String) => {
    const document = await db.collection(collectionName).doc(id).get();
    if (document.exists) {
        return document.data();
    } else {
        return null;
    }
};

const deleteDocument = async (collectionName: String, id: String) => {
    const documentRef = await db.collection(collectionName).doc(id);

    let document = await documentRef.get();
    if (document.exists) {
        await documentRef.update({
            active: false,
            endTimestamp: (new Date()).getTime(),
        });
        document = await documentRef.get();
        return document.data();
    } else {
        return null;
    }
};

const updateDocument = async (collectionName: String, id: String, updatedFields: JSON) => {
    const documentRef = await db.collection('assets').doc(id);

    // Probably want some sanity checks in here
    let document = await documentRef.get();
    if (document.exists) {
        await documentRef.update(
            updatedFields,
        );
        document = await documentRef.get();
        return document.data();
    } else {
        return null;
    }
};

export {getDocument, deleteDocument, updateDocument};
