import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetPostById(authorId: number, postId: number) {
  const post = await prisma.post.findUnique({
    where: {
      authorId,
      id: postId,
    },
  });
  return post;
}
