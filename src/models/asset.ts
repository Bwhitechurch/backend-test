import {StaffAssignment} from '../types/staffAssignment';

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

enum AssetStatus {
    NONE,
    LOST,
    STOLEN,
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

export {AssetType, AssetStatus};
