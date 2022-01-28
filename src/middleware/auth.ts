import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const jwtBearer = (req: Request, resp: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) {
        resp.status(401);
    }       
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET, (err: any, da: any) => {                
        if(err) {
            console.log('error');            
            return resp.sendStatus(401);
        }
        next();
    });
}