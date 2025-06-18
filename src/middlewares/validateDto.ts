import { Request, Response, NextFunction } from 'express';

export const validateDto = (dtoClass: any) => (req: Request, res: Response, next: NextFunction) => {
  const result = dtoClass.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      message: 'Validation error',
      errors: result.error.format(),
    });

    return;
  }

  next();
};
