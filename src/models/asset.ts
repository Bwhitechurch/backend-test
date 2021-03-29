import {StaffAssignment} from '../types/staffAssignment';

enum AssetType {
    PHONE = "phone",
    LAPTOP = "laptop",
    COMPUTER = "computer",
    SCREEN = "screen",
    CABLE = "cable",
    VESA = "vesa",
    KEYBOARD = "keyboard",
    MOUSE = "mouse",
    DOCK = "dock",
    CHARGER = "charger",
    USB = "usb",
}

enum AssetStatus {
    RETURNED = "returned",
    LOST = "lost",
    STOLEN = "stolen",
}

type Asset = {
    active: Boolean,
    startdate: String,
    endDate: String,
    status: AssetStatus,
    notes: String,
    serial: String,
    type: AssetType
    staffAssignmentHistory: Array<StaffAssignment>,
}

export {AssetType, AssetStatus};
