import {NextFunction, Request, Response} from 'express';
import 'joi';
import {getAllStaffSchema, postStaffSchema, patchStaffSchema} from '../api/v1/schemas/staff';
import {validateRequest} from './helper';

const getAllStaffValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, getAllStaffSchema);
};

const postStaffValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, postStaffSchema);
};

const patchStaffValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, patchStaffSchema);
};


export {getAllStaffValidator, postStaffValidator, patchStaffValidator};
