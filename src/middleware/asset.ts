import {NextFunction, Request, Response} from 'express';
import 'joi';
import {getAllAssetSchema, patchAssetSchema, postAssetSchema} from '../api/v1/schemas/asset';
import {validateRequest} from './helper';

const getAllAssetValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, getAllAssetSchema);
};

const postAssetValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, postAssetSchema);
};

const patchAssetValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, patchAssetSchema);
};


export {getAllAssetValidator, postAssetValidator, patchAssetValidator};
