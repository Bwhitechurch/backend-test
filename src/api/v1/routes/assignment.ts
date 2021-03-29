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
                    'error': 'Assignment could not be created',
                }).send();
            }
        });

    // Cancel an assignment with a reason
    assignmentRouter.delete(
        '/',
        deleteAssignmentValidator,
        async (request: Request, response: Response) => {
            const result = await deleteAssignment(request.body.staffId, request.body.assetId, request.body.reason);
            if (result) {
                response.status(200).json({
                    'status': 'Assignment successfully deleted',
                }).send();
            } else {
                response.status(400).json({
                    'error': 'Assignment between staff ' +
                    request.body.staffId + ' and asset ' + request.body.assetId +
                    ' does not exist',
                }).send();
            };
        },
    );

    router.use('/assignment', assignmentRouter);
};

export default addAssignmentRoutes;
