import {Staff} from '../models/staff';
import {db} from '../config/firebase'
import {v4 as uuidv4} from 'uuid';
import { deleteDocument, getDocument, updateDocument } from './dbHelper';

const getAllStaff = async (filterOptions) => {
    if (filterOptions != null) {
        //TODO
    } else {
        const result = await db.collection('staff').get();
        return result.docs.map((staff) => {
            return { id: staff.id, ...staff.data() }
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
        active: staffData.active,
        admin: staffData.admin,
        email: staffData.email,
        startTimestamp: (new Date()).getTime(),
        endTimestamp: null,
        firstName: staffData.firstName,
        lastName: staffData.lastName,
        phone: staffData.phone,
        assetAssignmentHistory: staffData.assetAssignmentHistory,
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