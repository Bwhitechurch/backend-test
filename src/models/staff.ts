import {AssetAssignmentOnStaff} from '../types/staffAssignment';

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
    assets: Array<AssetAssignmentOnStaff>,
}

export {Staff};
