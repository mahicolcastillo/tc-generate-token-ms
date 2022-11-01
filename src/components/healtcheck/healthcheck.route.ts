import healthcheckController from './healthcheck.controller';
import { Express } from 'express';
import routeNames from '../../routes/routesNames';

const healthcheckRoute = (app: Express, globalPath: string) => {
    app.get(`${globalPath}/${routeNames.healthcheck.name}`, healthcheckController);
}

export default healthcheckRoute;