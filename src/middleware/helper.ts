import {NextFunction, Request, Response} from 'express';
import Joi from 'joi';


const validateRequest = (
    request: Request,
    response: Response,
    next: NextFunction,
    schema: Joi.Schema,
) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };
    const result = schema.validate(request.body, options);
    if (result.error) {
        const error = `Validation error: ${result.error.details.map((x) => x.message).join(', ')}`;
        response.status(400).json({"errors": error});
    } else {
        request.body = result.value;
        next();
    }
};

export {validateRequest};
