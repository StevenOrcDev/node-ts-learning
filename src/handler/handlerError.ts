import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.name === 'PersonNotFoundError') {
    res.status(404).json({ message: err.message });
  } else if (err.name === 'TaskNotFoundError') {
    res.status(404).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
