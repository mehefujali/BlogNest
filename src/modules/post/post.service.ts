import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput) => {
  const post = await prisma.post.create({
    data: payload,
  });
  return post;
};

const getAllPost = async (): Promise<Post[]> => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
  return posts;
};

export const postService = {
  createPost,
  getAllPost,
};
