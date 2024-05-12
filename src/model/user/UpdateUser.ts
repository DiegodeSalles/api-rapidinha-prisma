import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserUpdateSchema {
  email?: string;
  name?: string;
}

export async function UpdateUser(
  id: number,
  { name, email }: UserUpdateSchema
) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  });

  return user;
}
