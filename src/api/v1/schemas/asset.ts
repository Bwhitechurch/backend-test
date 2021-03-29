import Joi from "joi";
import { AssetType, AssetStatus } from "../../../models/asset";

const getAllAssetSchema = Joi.object().keys({
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
    active: Joi.boolean().required(),
    startdate: Joi.string().required(),
    endDate: Joi.string().required(),
    status: Joi.string().valid(...Object.values(AssetStatus)).required(),
    notes: Joi.string().required(),
    serial: Joi.string().required(),
    type: Joi.string().valid(...Object.values(AssetType)).required(),
    staffAssignmentHistory: Joi.array().items(
        Joi.object().keys({
            active: Joi.boolean().required(),
            startDate: Joi.string().required(),
            endDate: Joi.string().required(),
            staffId: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            reason: Joi.string().required(),
        })
    ).required(),
});

const patchAssetSchema = Joi.object().keys({
    active: Joi.boolean(),
    startdate: Joi.string(),
    endDate: Joi.string(),
    status: Joi.string().valid(...Object.values(AssetStatus)),
    notes: Joi.string(),
    serial: Joi.string(),
    type: Joi.string().valid(...Object.values(AssetType)),
    staffAssignmentHistory: Joi.array().items(
        Joi.object().keys({
            active: Joi.boolean().required(),
            startDate: Joi.string().required(),
            endDate: Joi.string().required(),
            staffId: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            reason: Joi.string().required(),
        })
    ),
});

export {getAllAssetSchema, postAssetSchema, patchAssetSchema};