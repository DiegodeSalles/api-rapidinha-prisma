import express from "express";
import { CreateUser } from "../model/user/CreateUser";
import { Prisma } from "@prisma/client";

const router = express.Router();

interface UserSchema {
  name: string;
  email: string;
}

router.post("/user/create", async (req, res) => {
  const userData: UserSchema = req.body;
  try {
    const user = await CreateUser(userData);

    res.status(201).send(user);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        res.status(404).send("Usuário já cadastrado");
        return;
      }
    }
    res.status(500).send("Erro interno no servidor.");
    console.log(err);
  }
});

export default router;
