import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetPostList() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return posts;
}
