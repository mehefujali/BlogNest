import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput) => {
  const post = await prisma.post.create({
    data: payload,
  });
  return post;
};

const getAllPost = async (
  page: number,
  limit: number,
  search?: string
): Promise<Post[]> => {
  const skip = (page - 1) * limit;
  console.log(search);
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip,
    take: limit,
    include: {
      author: true,
    },
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  return posts;
};

export const postService = {
  createPost,
  getAllPost,
};
