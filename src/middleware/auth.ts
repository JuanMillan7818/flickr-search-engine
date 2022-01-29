import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

/**
 * @openapi
 *   components:
 *     securitySchemes:
 *       bearerAuth: 
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */
export const jwtBearer = (req: Request, resp: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return resp.sendStatus(401);
    } 
    //console.log('cabecera:', authorization);
          
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err: any, da: any) => {                
        if(err) {            
            return resp.sendStatus(401);
        }
        next();
    });
}