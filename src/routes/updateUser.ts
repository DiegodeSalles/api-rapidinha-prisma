import express from "express";
import { UserUpdate } from "../model/UserUpdate";

const router = express.Router();

router.put("/user/:id", async (req, res) => {
  const id = Number(req.params.id);

  const updatedUser = await UserUpdate(id, req.body);

  res.send(updatedUser);
});

export default router;
