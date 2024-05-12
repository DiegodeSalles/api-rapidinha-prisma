import express from "express";
import { GetUserList } from "../model/user/GetUserList";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await GetUserList();
  res.send(users);
});

export default router;
