import {Router, Request, Response} from 'express';
import {getAllAssetValidator, patchAssetValidator, postAssetValidator} from '../../../middleware/asset';
import 'joi';
import {createAsset, updateAsset, deleteAsset, getAsset, getAllAssets} from '../../../services/asset';

const addAssetRoutes = (router: Router) => {
    const assetRouter = Router(); // eslint-disable-line new-cap

    // Retrieve all assets
    assetRouter.get(
        '/all',
        getAllAssetValidator,
        async (request: Request, response: Response) => {
            const result = await getAllAssets(request.body.filterOptions);
            response.status(200).json(result).send();
        },
    );

    // Retrieve a specific asset
    assetRouter.get('/:assetId', async (request: Request, response: Response) => {
        const result = await getAsset(request.params.assetId);
        if (result != null) {
            response.status(200).json(result).send();
        } else {
            response.status(400).json({
                'error': 'Asset with id ' + request.params.assetId + ' does not exist'
            }).send();
        }
    });

    // Add a new asset
    assetRouter.post(
        '/', 
        postAssetValidator,
        async (request: Request, response: Response) => {
        const result = await createAsset(request.body);
        if (result != null) {
            response.status(200).json(result).send();
        } else {
            response.status(400).json({
                'error': 'Asset could not be created'
            }).send();
        }
    });

    // Soft delete an asset
    assetRouter.delete('/:assetId', async (request: Request, response: Response) => {
        const result = await deleteAsset(request.params.assetId);
        if(result != null) {
            response.status(200).json(result).send();
        } else {
            response.status(400).json({
                'error': 'Asset with id ' + request.params.assetId + ' does not exist'
            }).send();
        };
    });

    // Update a single field of an asset
    assetRouter.patch(
        '/:assetId', 
        patchAssetValidator,
        async (request: Request, response: Response) => {
            const result = await updateAsset(request.params.assetId, request.body);
            if(result != null) {
                response.status(200).json(result).send();
            } else {
                response.status(400).json({
                    'error': 'Asset with id ' + request.params.assetId + ' does not exist'
                }).send();
            };
        }
    );

    router.use('/asset', assetRouter);
};

export default addAssetRoutes;
