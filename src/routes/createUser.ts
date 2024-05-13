import express from "express";
import { CreateUser } from "../model/user/CreateUser";

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
    res.status(500).send("Erro interno no servidor.");
    console.log(err);
  }
});

export default router;
