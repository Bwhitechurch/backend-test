import {StaffAssignment} from '../types/staffAssignment';
import {db} from '../config/firebase';

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
    id: String,
    active: Boolean;
    startTimestamp: number;
    endTimestamp: number;
    status: AssetStatus;
    notes: String;
    serial: String;
    type: AssetType;
    staffAssignmentHistory: Array<StaffAssignment>;
}

export {Asset, AssetType, AssetStatus};
