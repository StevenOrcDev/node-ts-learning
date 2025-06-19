import { Request, Response, NextFunction } from 'express';
import { RequestDataSource } from '../constants/location';
import { isDtoValid } from '../helpers/check';
import { ZodTypeAny } from 'zod';

export const validateDto =
  (dtoClass: ZodTypeAny, requestDataSource: RequestDataSource) => (req: Request, res: Response, next: NextFunction) => {
    if (requestDataSource === RequestDataSource.PARAM) {
      const param = dtoClass.safeParse(req.params);
      if (!isDtoValid(param, res)) {
        return;
      }
    } else if (requestDataSource === RequestDataSource.PARAMBODY) {
      const param = dtoClass.safeParse(req.params);
      const result = dtoClass.safeParse(req.body);
      if (!result.success || !param.success) {
        if (!result.success) {
          res.status(400).json({
            message: 'error body',
            errors: result.error.format(),
          });
        } else if (!param.success) {
          res.status(400).json({
            message: 'error param',
            errors: param.error.format(),
          });
          return;
        }
      }
    } else if (requestDataSource === RequestDataSource.BODY) {
      const result = dtoClass.safeParse(req.body);
      if (!isDtoValid(result, res)) {
        return;
      }
    }
    next();
  };
