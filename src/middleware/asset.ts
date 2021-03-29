import {NextFunction, Request, Response} from 'express';
import 'joi';
import {getAllAssetsSchema} from '../api/v1/schemas/asset';
import {validateRequest} from './helper';

const getAllAssetsValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, getAllAssetsSchema);
};

export {getAllAssetsValidator};
