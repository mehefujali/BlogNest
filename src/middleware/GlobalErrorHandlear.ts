import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";

export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};
