import Joi from 'joi';
import {AssetType, AssetStatus} from '../../../models/asset';

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
    status: Joi.string().valid(...Object.values(AssetStatus)).required(),
    notes: Joi.string().required().allow(''),
    serial: Joi.string().required(),
    type: Joi.string().valid(...Object.values(AssetType)).required(),
});

const patchAssetSchema = Joi.object().keys({
    status: Joi.string().valid(...Object.values(AssetStatus)),
    notes: Joi.string(),
    serial: Joi.string(),
    type: Joi.string().valid(...Object.values(AssetType)),
});

export {getAllAssetSchema, postAssetSchema, patchAssetSchema};
