import '../types/staffAssignment';

enum AssetType {
    PHONE,
    LAPTOP,
    COMPUTER,
    SCREEN,
    CABLE,
    VESA,
    KEYBOARD,
    MOUSE,
    DOCK,
    CHARGER,
    USB,
}

type Asset = {
    active: Boolean,
    startdate: String,
    endDate: String,
    lost: Boolean,
    stolen: Boolean,
    notes: String,
    serial: String,
    type: AssetType
    staffAssignmentHistory: Array<StaffAssignment>,
}

export default AssetType;
