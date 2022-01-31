import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { RecordSearch } from "../../db/entities/record-search.entity";

 /**
 * @swagger
 *  tags: 
 *      name: Searchs
 *      description: endpoint to see all searches made by users.           
 */
/**
 * @swagger
 *  /searchs:
 *      get:
 *        description: Returns all searches.
 *        tags: [Searchs]
 *        security: 
 *          - bearerAuth: []
 *        responses:
 *          200: 
 *            description: Returns a list of type Record Search that reports all searches made by users.
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  $ref: '#/components/schemas/RecordSearch'
 *          401: 
 *            description: You do not have the necessary permissions for the request.
 *          500:
 *            description: An internal error has occurred.
 *          
 */
export class RecordSearchController {
    public router: Router;

    constructor() {                        
        this.router = Router();
        this.routes();
    }
    
    public routes() {
        this.router.get('/', this.getRecordSearch)
    }

    public async getRecordSearch(req: Request, resp: Response) {                               
        try {                                           
            resp.send(await getRepository(RecordSearch).find());
        } catch (error) {
            return resp.status(500).send({
                code: 500,
                message: error
            });          
        }       
    }   
}