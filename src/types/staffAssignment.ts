import {AssetStatus} from '../models/asset';

type StaffAssignment = {
    active: Boolean
    startDate: String,
    endDate: String,
    staffId: String,
    firstName: String,
    lastName: String,
    reason: AssetStatus,
}

export {StaffAssignment};
