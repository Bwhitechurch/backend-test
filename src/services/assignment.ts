import {db} from '../config/firebase';
import {AssetStatus} from '../models/asset';

const createAssignment = async (staffId: String, assetId: String): Promise<boolean> => {
    // Check that asset is not already assigned
    const assetRef = await db.collection('assets').doc(assetId);
    const asset = await assetRef.get();

    const staffRef = await db.collection('staff').doc(staffId);
    const staff = await staffRef.get();

    // If one of the objects does not exist, the assignment can't be created
    if (!staff.exists || !asset.exists) {
        return false;
    }


    const staffAssigned = asset.data().staff;
    if (staffAssigned.find((assignment) => assignment.active)) {
        return false;
    }

    // Add staff assignment to the asset
    const assignedDate = (new Date()).getTime();

    staffAssigned.push({
        active: true,
        assignedTimestamp: assignedDate,
        unassignedTimestamp: null,
        staffId: staffId,
        firstName: staff.data().firstName,
        lastName: staff.data().lastName,
        reason: null,
    });

    await assetRef.update({
        staff: staffAssigned,
    });

    // Add asset assignment to the staff
    const assetsAssigned = staff.data().assets;
    assetsAssigned.push({
        active: true,
        assignedTimestamp: assignedDate,
        unassignedTimestamp: null,
        assetId: assetId,
        reason: null,
        type: asset.data().type,
    });

    await staffRef.update({
        assets: assetsAssigned,
    });

    return true;
};

const deleteAssignment = async (staffId: String, assetId: String, reason: AssetStatus): Promise<boolean> => {
    // Check that assignment actually exists
    const assetRef = await db.collection('assets').doc(assetId);
    const asset = await assetRef.get();

    const staffRef = await db.collection('staff').doc(staffId);
    const staff = await staffRef.get();

    // If one of the objects does not exist, the assignment can't exist
    if (!staff.exists || !asset.exists) {
        return false;
    }

    // Check that assignment exists - if it does not then return early
    const dateUnassignedTimestamp = (new Date()).getTime();
    const staffAssigned = asset.data().staff;

    let assignmentExists = false;
    for (const i in staffAssigned) { // eslint-disable-line guard-for-in
        const assignment = staffAssigned[i];
        if (assignment.staffId == staffId && assignment.active) {
            assignmentExists = true;
            assignment.unassignedTimestamp = dateUnassignedTimestamp;
            assignment.active = false;
            assignment.reason = reason;
            staffAssigned[i] = assignment;
            break;
        }
    }

    if (!assignmentExists) {
        return false;
    }

    await assetRef.update({
        staff: staffAssigned,
    });

    // Delete from staff as well
    const assetsAssigned = staff.data().assets;
    for (const i in assetsAssigned) { // eslint-disable-line guard-for-in
        const assignment = staffAssigned[i];
        if (assignment.staffId == staffId && assignment.active) {
            assignment.unassignedTimestamp = dateUnassignedTimestamp;
            assignment.active = false;
            assignment.reason = reason;
            assetsAssigned[i] = assignment;
            break;
        }
    }

    await staffRef.update({
        assets: assetsAssigned,
    });

    return true;
};

export {createAssignment, deleteAssignment};
