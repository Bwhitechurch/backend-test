import {AssetAssignment} from '../types/assetAssignment';

type Staff = {
    active: Boolean,
    admin: Boolean,
    email: String,
    endDate: String,
    firstName: String,
    lastName: String,
    phone: String,
    startDate: String,
    assetAssignmentHistory: Array<AssetAssignment>,
}
