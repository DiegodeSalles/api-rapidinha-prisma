import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PostList() {
  const posts = await prisma.post.findMany();

  return posts;
}
