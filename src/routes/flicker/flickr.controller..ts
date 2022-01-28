import { NextFunction, Request, Response, Router } from "express";
import { getPhotoFlickr } from "../../helpers/fetch-api";
import { RecordSearch } from "../../db/entities/record-search.entity";
import { SearchFlickerDTO } from "../../struct-data/DTO/search-flicker.dto";
import { PhotosFlickr } from "../../struct-data/response/PhotosFlickr";
import { getRepository } from "typeorm";

export class FlickrController {
    public router: Router;

    constructor() {                
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.post('/flicker', this.searchPhotos);
    }

    public async searchPhotos(req: Request, resp: Response, next: NextFunction) {
        const body: SearchFlickerDTO = req.body;
        const { tag } = body;
        if(!tag) {
            return resp.status(400).send({
                code: 400,
                message: 'The request body is incorrect for the requested request',
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
            next(error);    
        }    
    }  
}