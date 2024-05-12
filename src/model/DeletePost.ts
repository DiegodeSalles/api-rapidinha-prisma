import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DeletePost(id: number, authorId: number) {
  const post = await prisma.post.delete({
    where: { id, authorId },
  });
  return post;
}
