import {Asset} from '../models/asset'
import {db} from '../config/firebase'
import {v4 as uuidv4} from 'uuid';

const getAllAssets = async (filterOptions) => {
    if (filterOptions != null) {
        //TODO
    } else {
        const result = await db.collection('assets').get();
        return result.docs.map((asset) => {
            return { id: asset.id, ...asset.data() }
        });
    }
}

const getAsset = async (assetId: string) => {
    const asset = await db.collection('assets').doc(assetId).get();
    if (asset.exists) {
        return asset.data();
    } else {
        return null;
    }
} 

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

    const result = await db.collection('assets').doc(newAsset.id).set(newAsset);
    return result.data();
}

const deleteAsset = async (assetId: string) => {
    const assetRef = await db.collection('assets').doc(assetId);
    
    let asset = await assetRef.get();
    if (asset.exists) {
        await assetRef.update({
            active: false,
            endDate: (new Date()).getTime()
        });
        asset = await assetRef.get();
        return asset.data();
    } else {
        return null;
    }
}

const updateAsset = async (assetId: string, updatedFields: JSON) => {
    const assetRef = await db.collection('assets').doc(assetId);
    
    // Probably want some sanity checks in here
    let asset = await assetRef.get();
    if (asset.exists) {
        await assetRef.update(
            updatedFields
        );
        asset = await assetRef.get();
        return asset.data();
    } else {
        return null;
    }
}

export {getAllAssets, getAsset, createAsset, deleteAsset, updateAsset};