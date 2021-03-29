import {Router, Request, Response} from 'express';
import {getAllAssetsValidator} from '../../../middleware/asset';
import 'joi';

const addAssetRoutes = (router: Router) => {
    const assetRouter = Router(); // eslint-disable-line new-cap

    // Retrieve all assets
    assetRouter.get(
        '/all',
        getAllAssetsValidator,
        (request: Request, response: Response) => {
            response.sendStatus(501);
        },
    );

    // Retrieve a specific asset
    assetRouter.get('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Add a new asset
    assetRouter.post('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Update asset details
    assetRouter.put('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Soft delete an asset
    assetRouter.delete('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Update a single field of an asset
    router.patch('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    router.use('/asset', assetRouter);
};

export default addAssetRoutes;
