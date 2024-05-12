import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function UserDelete(id: number) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
}
