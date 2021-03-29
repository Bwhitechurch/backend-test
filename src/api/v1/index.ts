import {Router} from 'express';
import addStaffRoutes from './routes/staff';
import addAssetRoutes from './routes/asset';
import addAssignmentRoutes from './routes/assignment';

export default (server: Router) => {
    const apiV1Router = Router(); // eslint-disable-line new-cap
    addStaffRoutes(apiV1Router);
    addAssetRoutes(apiV1Router);
    addAssignmentRoutes(apiV1Router);
    server.use('/api/v1', apiV1Router);
};
