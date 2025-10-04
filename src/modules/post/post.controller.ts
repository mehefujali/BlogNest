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
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const search = req.query.search || "";
  console.log(search);
  try {
    const posts = await postService.getAllPost(page, limit, search as string);
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
