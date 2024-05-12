import express from "express";
import { UserCreate } from "../model/UserCreate";

const router = express.Router();

interface UserSchema {
  name: string;
  email: string;
}

router.post("/user/create", async (req, res) => {
  const userData: UserSchema = req.body;
  const user = await UserCreate(userData);

  res.send(user);
});

export default router;
