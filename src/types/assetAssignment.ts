import {AssetType} from '../models/asset';
import {AssetAssignmentEndReason} from './staffAssignment';

type AssetAssignment = {
    active: Boolean,
    assignedDate: String,
    unassignedDate: String,
    assetId: String,
    reason: AssetAssignmentEndReason,
    type: AssetType,
}

export {AssetAssignment};
