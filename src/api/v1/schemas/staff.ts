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
    active: Joi.boolean().required(),
    admin: Joi.boolean().required(),
    email: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    staffAssignmentHistory: Joi.array().items(
        Joi.object().keys({
            active: Joi.boolean().required(),
            startTimestamp: Joi.string().required(),
            endTimestamp: Joi.string().required(),
            staffId: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            reason: Joi.string().required(),
        }),
    ).required(),
});

const patchStaffSchema = Joi.object().keys({
    active: Joi.boolean(),
    admin: Joi.boolean(),
    email: Joi.string(),
    startTimestamp: Joi.number(),
    endTimestamp: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.string(),
    staffAssignmentHistory: Joi.array().items(
        Joi.object().keys({
            active: Joi.boolean().required(),
            startTimestamp: Joi.string().required(),
            endTimestamp: Joi.string().required(),
            staffId: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            reason: Joi.string().required(),
        }),
    ),
});

export {getAllStaffSchema, postStaffSchema, patchStaffSchema};
