import { NextFunction, Request, Response }  from 'express';
import jwt                                  from 'jsonwebtoken';
import { Logger as log }                    from 'tslog';

import config                               from '../config/global';

const logger : log = new log({ displayFunctionName: false}); 

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization || req.headers.Authorization;

    try {
        const payload: any = jwt.verify(token as string, config.tokens.tokenSecret);

        if(!req.headers.clientname) throw 'clientName not defined';
        if(payload.clientName !== req.headers.clientname) throw 'Token invalid';
        if(payload.status !== 'a') throw 'Token invalid';
        
        const sesionId: string  = payload.sesionId;
        const decode: string    = Buffer.from(sesionId, 'base64').toString('ascii');
        const decodeSplit       = decode.split('.');
        if(req.headers.clientname !== decodeSplit[1] || config.tokens.tokenSesion !== decodeSplit[2]) throw 'Token invalid';

        next();
    } catch (error: any) {
        logger.debug('Error in validateJWT', JSON.stringify(error));
        res.status(401).json({
            code: 401,
            payload: error.name === 'TokenExpiredError' ? 'Token expired' : 'Token invalid',
        })
    }
};

export default validateJWT;