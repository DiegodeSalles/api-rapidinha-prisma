import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PostByUserId(authorId: number) {
  const posts = await prisma.post.findMany({
    where: { authorId },
  });

  return posts;
}
