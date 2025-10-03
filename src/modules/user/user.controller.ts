import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
};
