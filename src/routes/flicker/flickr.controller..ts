import { NextFunction, Request, Response, Router } from "express";
import { getPhotoFlickr } from "../../helpers/fetch-api";
import { RecordSearch } from "../../db/entities/record-search.entity";
import { SearchFlickerDTO } from "../../struct-data/DTO/search-flicker.dto";
import { PhotosFlickr } from "../../struct-data/response/PhotosFlickr";
import { getRepository } from "typeorm";

/**
 * @swagger
 *  tags: 
 *      name: Photos
 *      description: endpoint to search all images related to a tag.           
 */
/**
 * @swagger
 *  /api/search/flicker:
 *      post:
 *        description: Search for images related to a keyword.
 *        tags: [Photos]
 *        security: 
 *          - bearerAuth: []
 *        requestBody:
 *          required: true
 *          content: 
 *            application/json:
 *              schema: 
 *                $ref: '#/components/schemas/ReqSearchFlickerDTO'
 *        responses:
 *          200: 
 *            description: Return a list of type PhotosFlickr, Multiple images related to the search have been found.
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  $ref: '#/components/schemas/PhotosFlickr'
 *          400: 
 *            description: The request body is invalid.
 *          401: 
 *            description: You do not have the necessary permissions for the request.
 *          500:
 *            description: An internal error has occurred.
 *          
 */
export class FlickrController {
    public router: Router;

    constructor() {                
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.post('/flicker', this.searchPhotos);
    }
  
    public async searchPhotos(req: Request, resp: Response) {
        const body: SearchFlickerDTO = req.body;
        const { tag } = body;        
        if(!tag) {
            return resp.status(400).send({
                code: 400,
                message: 'The request body is incorrect for the request',
                example: {
                    tag: 'cats'
                }                
            });
        }
        if(typeof(tag) != 'string') {
            return resp.status(400).send({
                code: 400,
                message: 'The request body must be of type string',
                example: {
                    tag: 'cats'
                }                
            });
        }
        try {
            const photos: PhotosFlickr[] = await getPhotoFlickr(`${process.env.URL_FLICKR}&tags=${tag.trim()}`);            
            await getRepository(RecordSearch).save(new RecordSearch(tag));
            resp.send(photos);
        } catch (error) {
            return resp.status(500).send({
                code: 500,
                message: error
            });
        }    
    }  
}