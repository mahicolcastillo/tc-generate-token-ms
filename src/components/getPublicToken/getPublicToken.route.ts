import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getPublicTokenController     from './getPublicToken.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getPublicToken.middleware';

const getPublicTokenRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getPublicToken.name}`,
        validation,
        expressValidatorMiddleware,
        getPublicTokenController
    );
}

export default getPublicTokenRoute;