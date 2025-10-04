import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const user = await prisma.user.create({
    data: payload,
  });
  return user;
};

const createMenyUsers = async (
  payload: Prisma.UserCreateInput[]
): Promise<{ count: number }> => {
  const users = await prisma.user.createMany({
    data: payload,
    skipDuplicates: true,
  });
  return users;
};

const getAllUser = async (): Promise<Partial<User>[]> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      picture: true,
      role: true,
      status: true,
      Post: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return users;
};

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      picture: true,
      role: true,
      status: true,
      Post: true,
    },
  });
  return user;
};

export const userService = {
  createUser,
  getAllUser,
  createMenyUsers,
  getUserById,
};
