import Joi from "joi";
import { AssetType, AssetStatus } from "../../../models/asset";

const getAllAssetsSchema = Joi.object().keys({
    filterOptions: Joi.object().keys({
        active: Joi.boolean(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        type: Joi.string().valid(...Object.values(AssetType)),
        status: Joi.string().valid(...Object.values(AssetStatus)),
        serial: Joi.string(),
    }),
});

const postAssetSchema = Joi.object().keys({
    
});

export {getAllAssetsSchema};