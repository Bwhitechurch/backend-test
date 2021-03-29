import {Staff} from '../models/staff';
import {db} from '../config/firebase';
import {v4 as uuidv4} from 'uuid';
import {deleteDocument, getDocument, updateDocument} from './dbHelper';

const getAllStaff = async (filterOptions) => {
    if (filterOptions != null) {
        let result = db.collection('staff');
        // Add filter conditions
        let filterByAssetType = false;
        Object.keys(filterOptions).forEach((key) => {
            if (key == 'assetType') {
                filterByAssetType = true;
                // firestore provides no easy way to search inside arrays for
                // specific key, so do nothing here
            } else {
                result = result.where(key, '==', filterOptions[key]);
            }
        });
        result = await result.get();

        result = result.docs.map((staff) => {
            return {id: staff.id, ...staff.data()};
        });

        if (filterByAssetType) {
            const filteredResultsOnType = [];
            for (const i in result) { // eslint-disable-line guard-for-in
                // Only add results that match the type filter
                for (const j in result[i].assets) { // eslint-disable-line guard-for-in
                    if (result[i].assets[j].type == filterOptions.assetType) {
                        filteredResultsOnType.push(result[i]);
                        break;
                    }
                }
            }
            result = filteredResultsOnType;
        }

        return result;
    } else {
        const result = await db.collection('staff').get();
        return result.docs.map((staff) => {
            return {id: staff.id, ...staff.data()};
        });
    }
};

const getStaff = async (staffId: String) => {
    const result = await getDocument('staff', staffId);
    return result;
};

const createStaff = async (staffData) => {
    const newStaff: Staff = {
        id: uuidv4(), // Generate a uuid for the created staff
        active: true,
        admin: staffData.admin,
        email: staffData.email,
        startTimestamp: (new Date()).getTime(),
        endTimestamp: null,
        firstName: staffData.firstName,
        lastName: staffData.lastName,
        phone: staffData.phone,
        assets: [],
    };

    await db.collection('staff').doc(newStaff.id).set(newStaff);
    return newStaff;
};

const deleteStaff = async (staffId: String) => {
    const result = await deleteDocument('staff', staffId);
    return result;
};

const updateStaff = async (staffId: String, updatedFields: JSON) => {
    const result = await updateDocument('staff', staffId, updatedFields);
    return result;
};

export {getAllStaff, getStaff, createStaff, deleteStaff, updateStaff};
