import {AssetStatus} from '../models/asset';

type AssetAssignmentOnAsset = {
    active: Boolean,
    assignedTimestamp: number,
    unassignedTimestamp: number,
    staffId: String,
    firstName: String,
    lastName: String,
    reason: AssetStatus,
}

export {AssetAssignmentOnAsset};
