import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const user = await prisma.user.create({
    data: payload,
  });
  return user;
};

const getAllUser = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};
export const userService = {
  createUser,
  getAllUser,
};
