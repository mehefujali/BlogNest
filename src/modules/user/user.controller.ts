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

const createManyUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await userService.createMenyUsers(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.status(200).json({
      success: true,
      message: "User fetch success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await userService.getAllUser();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  getAllUser,
  createManyUsers,
  getUserById,
};
