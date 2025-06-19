import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { RequestType } from '../models';

const validateDto =
  (schema: ZodSchema, property: RequestType = RequestType.BODY) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);
    if (!result.success) {
      res.status(400).json({
        message: 'Validation error',
        errors: result.error.errors,
      });

      return;
    }

    req[property] = result.data;
    next();
  };

export default validateDto;
