import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import routeNames           from './routesNames';

import healthcheckRoute     from '../components/healtcheck/healthcheck.route';
import getExampleRoute      from '../components/getExample/getExample.route';

const logger : log = new log({ displayFunctionName: false}); 

const routes = (app: Express) => {

    logger.info(`[${routeNames.healthcheck.verb}] ${config.get("globalPath")}/${routeNames.healthcheck.name}`)
    healthcheckRoute(app, config.get("globalPath"));

    logger.info(`[${routeNames.getExample.verb}] ${config.get("globalPath")}/${routeNames.getExample.name}`)
    getExampleRoute(app, config.get("globalPath"));
}

export default routes;