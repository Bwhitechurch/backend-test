import {AssetAssignment} from '../types/assetAssignment';

type Staff = {
    id: String,
    active: Boolean,
    admin: Boolean,
    email: String,
    startTimestamp: number,
    endTimestamp: number,
    firstName: String,
    lastName: String,
    phone: String,
    staffAssignmentHistory: Array<AssetAssignment>,
}

export {Staff};
