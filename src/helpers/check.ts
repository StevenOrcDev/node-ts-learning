import { Response } from 'express';

export function isDtoValid(param: any, res: Response): boolean {
  if (!param.success) {
    res.status(400).json({
      message: 'Validation error',
      errors: param.error.format(),
    });
    return false;
  }
  return true;
}
