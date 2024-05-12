import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetPostByUserId(authorId: number) {
  const posts = await prisma.post.findMany({
    where: { authorId },
  });

  return posts;
}
