import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PostSchema {
  title: string;
  content?: string;
  published: boolean;
}

export async function UpdatePost(
  authorId: number,
  id: number,
  { title, content, published }: PostSchema
) {
  const post = await prisma.post.update({
    where: { authorId, id },
    data: {
      title,
      content,
      published,
    },
  });

  return post;
}
