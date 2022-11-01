import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getExampleController         from './getExample.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getExample.middleware';
import validateJWT                  from '../../middleware/validateJWT.middleware';

const getExampleRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getExample.name}`,
        validation,
        expressValidatorMiddleware,
        validateJWT,
        getExampleController
    );
}

export default getExampleRoute;