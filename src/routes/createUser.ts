import express from "express";
import { CreateUser } from "../model/user/CreateUser";

const router = express.Router();

interface UserSchema {
  name: string;
  email: string;
}

router.post("/user/create", async (req, res) => {
  const userData: UserSchema = req.body;
  const user = await CreateUser(userData);

  res.send(user);
});

export default router;
