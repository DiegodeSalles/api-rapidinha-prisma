import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

interface PostSchema {
  title: string;
  content?: string;
  published: boolean;
}

export async function postCreate(authorId: number, postData: PostSchema) {
  const post = await prisma.post.create({
    data: {
      title: postData.title,
      content: postData?.content,
      published: postData.published,
      createdAt: new Date(),
      authorId,
    },
  });
  return post;
}
