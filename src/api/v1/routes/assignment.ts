import {Router, Request, Response} from 'express';
import {postAssignmentValidator, deleteAssignmentValidator} from '../../../middleware/assignment';
import {createAssignment, deleteAssignment} from '../../../services/assignment';

const addAssignmentRoutes = (router: Router) => {
    const assignmentRouter = Router(); // eslint-disable-line new-cap

    // Add a new assignment
    assignmentRouter.post(
        '/',
        postAssignmentValidator,
        async (request: Request, response: Response) => {
            const result = await createAssignment(request.body.staffId, request.body.assetId);
            if (result) {
                response.status(200).json({'status': 'Assignment successfully created'}).send();
            } else {
                response.status(400).json({
                    'error': 'Assignment could not be created, as the asset is already assigned to a staff member',
                }).send();
            }
        });

    // Cancel an assignment with a reason
    assignmentRouter.delete(
        '/',
        deleteAssignmentValidator,
        async (request: Request, response: Response) => {
            const result = await deleteAssignment(request.body.staffId, request.body.assetId);
            if (result != null) {
                response.status(200).json(result).send();
            } else {
                response.status(400).json({
                    'error': 'Assignment between staff ' +
                    request.params.staffId + ' and asset ' + request.params.assetId +
                    ' does not exist',
                }).send();
            };
        },
    );

    router.use('/assignment', assignmentRouter);
};

export default addAssignmentRoutes;
