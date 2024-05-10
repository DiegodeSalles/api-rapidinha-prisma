import express from "express";
import { UserList } from "../model/UserList";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UserList();
  res.send(users);
});

export default router;
