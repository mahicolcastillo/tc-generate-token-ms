import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getExampleService    from './getExample.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getExampleModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getExample`);
        const response = await getExampleService(headers);
        
        return new OutputMessage(response).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getExampleModule;