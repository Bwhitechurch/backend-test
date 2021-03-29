import {AssetAssignmentOnAsset} from '../types/assetAssignment';

enum AssetType {
    PHONE = 'phone',
    LAPTOP = 'laptop',
    COMPUTER = 'computer',
    SCREEN = 'screen',
    CABLE = 'cable',
    VESA = 'vesa',
    KEYBOARD = 'keyboard',
    MOUSE = 'mouse',
    DOCK = 'dock',
    CHARGER = 'charger',
    USB = 'usb',
}

enum AssetStatus {
    RETURNED = 'returned',
    LOST = 'lost',
    STOLEN = 'stolen',
}

type Asset = {
    id: String,
    active: Boolean,
    startTimestamp: number,
    endTimestamp: number,
    status: AssetStatus,
    notes: String,
    serial: String,
    type: AssetType,
    staff: Array<AssetAssignmentOnAsset>,
}

export {Asset, AssetType, AssetStatus};
