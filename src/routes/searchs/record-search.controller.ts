import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { RecordSearch } from "../../db/entities/record-search.entity";

export class RecordSearchController {
    public router: Router;

    constructor() {                        
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get('/', this.getRecordSearch)
    }

    public async getRecordSearch(req: Request, resp: Response, next: NextFunction) {                               
        try {                                           
            resp.send(await getRepository(RecordSearch).find());
        } catch (error) {
            next(error)            
        }       
    }   
}