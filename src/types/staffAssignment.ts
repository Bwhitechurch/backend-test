import {AssetStatus, AssetType} from '../models/asset';

type AssetAssignmentOnStaff = {
    active: Boolean
    assignedDate: number,
    unassignedDate: number,
    assetId: String,
    reason: AssetStatus,
    type: AssetType
}

export {AssetAssignmentOnStaff};
