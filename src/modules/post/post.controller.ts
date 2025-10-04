import { NextFunction, Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json({
      success: true,
      message: "Post create success",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postService.getAllPost();
    res.status(200).json({
      success: true,
      message: "Post create success",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

export const postController = {
  createPost,
  getAllPost,
};
