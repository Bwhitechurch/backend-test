import {Asset} from '../models/asset';
import {db} from '../config/firebase';
import {v4 as uuidv4} from 'uuid';
import {deleteDocument, getDocument, updateDocument} from './dbHelper';

const getAllAssets = async (filterOptions) => {
    if (filterOptions != null) {
        let result = db.collection('assets');
        // Add filter conditions
        let filterByStaffName = false;
        Object.keys(filterOptions).forEach((key) => {
            if (['firstName', 'lastName'].includes(key)) {
                filterByStaffName = true;
                // firestore provides no easy way to search inside arrays for
                // specific key, so do nothing here
            } else {
                result = result.where(key, '==', filterOptions[key]);
            }
        });
        result = await result.get();

        result = result.docs.map((asset) => {
            return {id: asset.id, ...asset.data()};
        });

        if (filterByStaffName) {
            const filteredResultsOnName = [];
            for (const i in result) { // eslint-disable-line guard-for-in
                // Only add results that match the type filter
                for (const j in result[i].staff) { // eslint-disable-line guard-for-in
                    if (
                        result[i].staff[j].firstName == filterOptions.firstName ||
                        result[i].staff[j].lastName == filterOptions.lastName
                    ) {
                        filteredResultsOnName.push(result[i]);
                        break;
                    }
                }
            }
            result = filteredResultsOnName;
        }

        return result;
    } else {
        const result = await db.collection('assets').get();
        return result.docs.map((asset) => {
            return {id: asset.id, ...asset.data()};
        });
    }
};

const getAsset = async (assetId: string) => {
    const result = await getDocument('assets', assetId);
    return result;
};

const createAsset = async (assetData) => {
    const newAsset: Asset = {
        id: uuidv4(), // Generate a uuid for the created asset
        active: true,
        startTimestamp: (new Date()).getTime(),
        endTimestamp: null,
        status: assetData.status,
        notes: assetData.notes,
        serial: assetData.serial,
        type: assetData.type,
        staff: [],
    };

    // Need some basic validation here

    await db.collection('assets').doc(newAsset.id).set(newAsset);
    return newAsset;
};

const deleteAsset = async (assetId: string) => {
    const result = await deleteDocument('assets', assetId);
    return result;
};

const updateAsset = async (assetId: string, updatedFields: JSON) => {
    const result = await updateDocument('assets', assetId, updatedFields);
    return result;
};

export {getAllAssets, getAsset, createAsset, deleteAsset, updateAsset};
