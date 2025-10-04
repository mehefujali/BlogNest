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

export const postController = {
  createPost,
};
