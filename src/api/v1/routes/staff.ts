import {Router, Request, Response} from 'express';
import {getAllStaffValidator, patchStaffValidator, postStaffValidator} from '../../../middleware/staff';
import {createStaff, deleteStaff, getAllStaff, getStaff, updateStaff} from '../../../services/staff';

const addStaffRoutes = (router: Router) => {
    const staffRouter = Router(); // eslint-disable-line new-cap

    // Retrieve all staff members
    staffRouter.get(
        '/all',
        getAllStaffValidator,
        async (request: Request, response: Response) => {
            const result = await getAllStaff(request.body.filterOptions);
            response.status(200).json(result).send();
        },
    );

    // Retrieve a specific staff member
    staffRouter.get('/:staffId', async (request: Request, response: Response) => {
        const result = await getStaff(request.params.staffId);
        if (result != null) {
            response.status(200).json(result).send();
        } else {
            response.status(400).json({
                'error': 'Staff with id ' + request.params.staffId + ' does not exist',
            }).send();
        }
    });

    // Add a new staff member
    staffRouter.post(
        '/',
        postStaffValidator,
        async (request: Request, response: Response) => {
            const result = await createStaff(request.body);
            if (result != null) {
                response.status(200).json(result).send();
            } else {
                response.status(400).json({
                    'error': 'Staff could not be created',
                }).send();
            }
        });

    // Soft delete a staff member
    staffRouter.delete('/:staffId', async (request: Request, response: Response) => {
        const result = await deleteStaff(request.params.staffId);
        if (result != null) {
            response.status(200).json(result).send();
        } else {
            response.status(400).json({
                'error': 'Staff with id ' + request.params.staffId + ' does not exist',
            }).send();
        };
    });

    // Update a single field of a staff member
    staffRouter.patch(
        '/:staffId',
        patchStaffValidator,
        async (request: Request, response: Response) => {
            const result = await updateStaff(request.params.staffId, request.body);
            if (result != null) {
                response.status(200).json(result).send();
            } else {
                response.status(400).json({
                    'error': 'Staff with id ' + request.params.staffId + ' does not exist',
                }).send();
            };
        },
    );

    router.use('/staff', staffRouter);
};

export default addStaffRoutes;
