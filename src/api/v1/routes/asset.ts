import {Router, Request, Response} from 'express';
import {getAllAssetValidator, patchAssetValidator, postAssetValidator} from '../../../middleware/asset';
import 'joi';

const addAssetRoutes = (router: Router) => {
    const assetRouter = Router(); // eslint-disable-line new-cap

    // Retrieve all assets
    assetRouter.get(
        '/all',
        getAllAssetValidator,
        (request: Request, response: Response) => {
            response.sendStatus(501);
        },
    );

    // Retrieve a specific asset
    assetRouter.get('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Add a new asset
    assetRouter.post(
        '/:assetId', 
        postAssetValidator,
        (request: Request, response: Response) => {
        
        // Check date fields to ensure that they are in UTC format 

        response.sendStatus(501);
    });

    // Soft delete an asset
    assetRouter.delete('/:assetId', (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    // Update a single field of an asset
    router.patch(
        '/:assetId', 
        patchAssetValidator,
        (request: Request, response: Response) => {
        response.sendStatus(501);
    });

    router.use('/asset', assetRouter);
};

export default addAssetRoutes;
