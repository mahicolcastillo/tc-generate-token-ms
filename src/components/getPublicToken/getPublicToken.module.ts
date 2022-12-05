import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';
import jwt                      from 'jsonwebtoken';

import config               from '../../config/global';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getPublicTokenModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getPublicTokenModule`);

        const sesionId = `clientName.${headers.clientname}.${config.tokens.tokenSesion}`;
        const buffer = Buffer.from(sesionId, 'ascii');
        const base64 = buffer.toString('base64');

        if(!headers.clientname) throw new Error;
        const payload = {
            clientName: headers.clientname,
            sesionId: base64,
        };

        const token = jwt.sign(payload, config.tokens.tokenSecret, {
            expiresIn: '10m'
        });
        
        return new OutputMessage({ publicToken: token }).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getPublicTokenModule;