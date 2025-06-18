import { Request, Response, NextFunction } from 'express';
import { Location } from '../constants/location';
import { checkIfIsOk } from '../helpers/check';

export const validateDto = (dtoClass: any, location: Location) => (req: Request, res: Response, next: NextFunction) => {
  if (location === Location.PARAM) {
    const param = dtoClass.safeParse(req.params);
    if (!checkIfIsOk(param, res)) {
      return;
    }
  } else if (location === Location.PARAMBODY) {
    const param = dtoClass.safeParse(req.params);
    const result = dtoClass.safeParse(req.body);
    if (!result.success || !param.success) {
      res.status(400).json({
        message: 'Validation error',
        errors: result.error.format(),
      });
      return;
    }
  } else if (location === Location.BODY) {
    const result = dtoClass.safeParse(req.body);
    if (!checkIfIsOk(result, res)) {
      return;
    }
  }
  next();
};
