import {db} from '../config/firebase';

const createAssignment = async (staffId: String, assetId: String): Promise<boolean> => {
    // Check that asset is not already assigned
    const assetRef = await db.collection('assets').doc(assetId);
    const asset = await assetRef.get();

    const staffRef = await db.collection('staff').doc(staffId);
    const staff = await staffRef.get();

    const staffAssigned = asset.data().staff;
    if (staffAssigned.find((assignment) => assignment.active == true)) {
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

    console.log(staffAssigned);

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

const deleteAssignment = async (staffId: String, assetId: String): Promise<boolean> => {
    // Check that assignment actually exists
    const assetRef = await db.collection('assets').doc(assetId);
    const asset = assetRef.get().data();

    const staffRef = await db.collection('staff').doc(staffId);
    const staff = staffRef.get().data();

    console.log(asset);
    console.log(staff);


    return false;
};

export {createAssignment, deleteAssignment};
