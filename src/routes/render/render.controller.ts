import { Request, Response, Router } from "express";
const jwt = require('jsonwebtoken');

export class RenderController {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();             
    }
    
    public renderAndJwt(req: Request, resp: Response) {
        const accessToken = jwt.sign({
            authorization: true
            },
            process.env.TOKEN_SECRET
        );
        resp.send(accessToken);        
    }

    public routes() {
        this.router.get('/', this.renderAndJwt)
    }


}