import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

const logger : log = new log({ displayFunctionName: false}); 

const getExampleService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getExample`);

        if(!headers.clientname) throw 'clientName not defined';
        // const response = await ;
        const response = { message: 'test' };
        logger.debug(`Response data: ${JSON.stringify(response)}`);

        return response;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getExampleService;