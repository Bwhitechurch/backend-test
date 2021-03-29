import {Asset} from '../models/asset'
import {db} from '../config/firebase'
import {v4 as uuidv4} from 'uuid';
import { deleteDocument, getDocument, updateDocument } from './dbHelper';

const getAllAssets = async (filterOptions) => {
    if (filterOptions != null) {
        //TODO
    } else {
        const result = await db.collection('assets').get();
        return result.docs.map((asset) => {
            return { id: asset.id, ...asset.data() }
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
        active: assetData.active,
        startTimestamp: (new Date()).getTime(),
        endTimestamp: null,
        status: assetData.status,
        notes: assetData.notes,
        serial: assetData.serial,
        type: assetData.type,
        staffAssignmentHistory: assetData.staffAssignmentHistory,
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