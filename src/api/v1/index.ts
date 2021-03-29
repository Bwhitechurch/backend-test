import {Router} from 'express';
import addStaffRoutes from './routes/staff';
import addAssetRoutes from './routes/asset';

export default (server: Router) => {
    const apiV1Router = Router(); // eslint-disable-line new-cap
    addStaffRoutes(apiV1Router);
    addAssetRoutes(apiV1Router);
    server.use('/api/v1', apiV1Router);
};
