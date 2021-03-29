import {AssetStatus, AssetType} from '../models/asset';

type AssetAssignment = {
    active: Boolean,
    assignedDate: String,
    unassignedDate: String,
    assetId: String,
    reason: AssetStatus,
    type: AssetType,
}

export {AssetAssignment};