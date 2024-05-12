import express from "express";
import { GetUserById } from "../model/user/GetUserById";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
  const userId = Number(req.params.id);
  const user = await GetUserById(userId);

  res.send(user);
});

export default router;
