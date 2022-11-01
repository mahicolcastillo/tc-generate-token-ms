import { Logger as log }        from 'tslog';
import { Request, Response }    from 'express';

import getPublicTokenModule from './getPublicToken.module';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getPublicTokenController = async(req: Request, res: Response) => {
    try {
        logger.info(`Starting controller getPublicToken`);
        const response: ResponseInterface = await getPublicTokenModule(req.headers);
        logger.debug(`Response: `, response);

        return res.status(response.code).send(response);
    } catch (error: any) {
        logger.error(JSON.stringify(error));
        return res.status(error.code).send(error);
    }
} 

export default getPublicTokenController;