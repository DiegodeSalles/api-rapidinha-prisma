import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserSchema {
  email: string;
  name?: string;
}

export async function UserCreate(userData: UserSchema) {
  const user = await prisma.user.create({
    data: {
      name: userData?.name,
      email: userData.email,
    },
  });
  return user;
}
