import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function UserList() {
  const users = await prisma.user.findMany({
    include: { posts: {} },
  });
  return users;
}
