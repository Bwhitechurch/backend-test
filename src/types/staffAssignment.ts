enum AssetAssignmentEndReason {
    STOLEN,
    LOST,
    RETURNED,
}

type StaffAssignment = {
    active: Boolean
    startDate: String,
    endDate: String,
    staffId: String,
    firstName: String,
    lastName: String,
    reason: AssetAssignmentEndReason,
}

export {AssetAssignmentEndReason, StaffAssignment};
