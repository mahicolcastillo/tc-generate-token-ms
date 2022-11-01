import { NextFunction, Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';

const expressValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      mensaje: 'Error de validación de campos',
      codigo: 400,
      errores: errors.array(),
    });
  }

  req.body    = matchedData(req, { locations: ['body'] });
  req.params  = matchedData(req, { locations: ['params'] });
  req.query   = matchedData(req, { locations: ['query'] });
  req.headers = matchedData(req, { locations: ['headers'] });
  return next();
};

export default expressValidatorMiddleware;