import { Request, Response, Router } from "express";
import * as jwt from "jsonwebtoken";

/**
 * @swagger
 *  tags: 
 *      name: default
 *      description: Project root.           
 */
/**
 * @swagger
 *  /:
 *      get:
 *        description: To render.
 *        tags: [default]
 *        responses:
 *          200: 
 *            description: Successful.            
 *          500:
 *            description: An internal error has occurred.
 *          
 */
/**
 * @swagger
 *  /token:
 *      get:
 *        description: Obtain a valid JWT token Bearer for the connection to the API.
 *        tags: [default]
 *        responses:
 *          200: 
 *            description: Successful.            
 *          500:
 *            description: An internal error has occurred.
 *          
 */
export class RenderController {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();             
    }

    public routes() {
        this.router.get('/', this.renderApp);        
        this.router.get('/token', this.generateJWT);
        this.router.get('/*', this.redirectUrl)
    }

    public redirectUrl(req: Request, resp: Response) {                                  
        resp.redirect('/');
    }
    
    public renderApp(req: Request, resp: Response) {                  
        console.log('page:',req.url);
        resp.sendFile(req.url);
    }

    public generateJWT(req: Request, resp: Response) {
        try {
            const accessToken = jwt.sign({
                authorization: true
                },
                process.env.TOKEN_SECRET
            );
            resp.send({
                token: 'Bearer ' + accessToken
            });                    
        } catch (error) {
            return resp.status(500).send({
                code: 500,
                message: error
            });  
        }
    }    
}