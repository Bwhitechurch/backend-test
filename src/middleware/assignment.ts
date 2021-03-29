import {NextFunction, Request, Response} from 'express';
import 'joi';
import {postAssignmentSchema, deleteAssignmentSchema} from '../api/v1/schemas/assignment';
import {validateRequest} from './helper';

const postAssignmentValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, postAssignmentSchema);
};

const deleteAssignmentValidator = (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    validateRequest(request, response, next, deleteAssignmentSchema);
};

export {postAssignmentValidator, deleteAssignmentValidator};
