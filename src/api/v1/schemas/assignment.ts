import Joi from 'joi';
import {AssetStatus} from '../../../models/asset';

const postAssignmentSchema = Joi.object().keys({
    staffId: Joi.string().required(),
    assetId: Joi.string().required(),
});

const deleteAssignmentSchema = Joi.object().keys({
    staffId: Joi.string(),
    assetId: Joi.string(),
    reason: Joi.string().valid(...Object.values(AssetStatus)),
});

export {deleteAssignmentSchema, postAssignmentSchema};
