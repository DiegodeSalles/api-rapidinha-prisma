import express from "express";
import { DeleteUser } from "../model/user/DeleteUser";

const router = express.Router();

router.delete("/user/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await DeleteUser(id);

  res.send(user);
});

export default router;
