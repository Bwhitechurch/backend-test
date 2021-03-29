import AssetType from '../models/asset';

type AssetAssignment = {
    active: Boolean,
    assignedDate: String,
    unassignedDate: String,
    assetId: String,
    reason: AssetAssignmentEndReason,
    type: AssetType,
}

export default AssetAssignment;
