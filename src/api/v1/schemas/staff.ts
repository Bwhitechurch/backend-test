import Joi from 'joi';
import {AssetType} from '../../../models/asset';

const getAllStaffSchema = Joi.object().keys({
    filterOptions: Joi.object().keys({
        active: Joi.boolean(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        assetType: Joi.string().valid(...Object.values(AssetType)),
    }),
});

const postStaffSchema = Joi.object().keys({
    admin: Joi.boolean().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
});

const patchStaffSchema = Joi.object().keys({
    active: Joi.boolean(),
    admin: Joi.boolean(),
    email: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.string(),
});

export {getAllStaffSchema, postStaffSchema, patchStaffSchema};
