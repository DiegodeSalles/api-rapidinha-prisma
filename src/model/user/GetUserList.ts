import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetUserList() {
  const users = await prisma.user.findMany({
    include: { posts: {} },
  });
  return users;
}
