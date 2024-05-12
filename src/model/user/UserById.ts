import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetUserById(id: number) {
  const user = await prisma.user.findMany({
    where: {
      id,
    },
    include: { posts: {} },
  });

  return user;
}
