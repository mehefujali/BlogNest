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
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const search = req.query.search || "";

  try {
    const response = await userService.getAllUser(
      page,
      limit,
      search as string
    );
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const response = await userService.updateUser(req.body, id);
    res.status(200).json({
      success: true,
      message: "Users Update successfully",
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
  updateUser,
};
