import { Logger as log }        from 'tslog';
import { Request, Response }    from 'express';

import getExampleModule     from './getExample.module';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getExampleController = async(req: Request, res: Response) => {
    try {
        logger.info(`Starting controller getExample`);
        const response: ResponseInterface = await getExampleModule(req.headers);

        return res.status(response.code).send(response);
    } catch (error: any) {
        logger.error(JSON.stringify(error));
        return res.status(error.code).send(error);
    }
} 

export default getExampleController;