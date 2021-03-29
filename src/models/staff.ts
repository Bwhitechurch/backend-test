import {AssetAssignment} from '../types/assetAssignment';

type Staff = {
    active: Boolean,
    admin: Boolean,
    email: String,
    startDate: String,
    endDate: String,
    firstName: String,
    lastName: String,
    phone: String,
    assetAssignmentHistory: Array<AssetAssignment>,
}
