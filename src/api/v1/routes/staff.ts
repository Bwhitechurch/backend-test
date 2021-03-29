import {Router, Request, Response} from 'express';

const addStaffRoutes = (router: Router) => {
    const staffRouter = Router(); // eslint-disable-line new-cap

    // Retrieve all staff members
    staffRouter.get('/all', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Retrieve a specific staff member
    staffRouter.get('/:staffId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Add a new staff member
    staffRouter.post('/:staffId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Update staff details
    staffRouter.put('/:staffId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Soft delete a staff member
    staffRouter.delete('/:staffId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Update a single field of a staff member
    router.patch('/:staffId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    router.use('/staff', staffRouter);
};

export default addStaffRoutes;
