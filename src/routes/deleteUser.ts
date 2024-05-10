import express from "express";
import { UserDelete } from "../model/UserDelete";

const router = express.Router();

router.delete("/user/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await UserDelete(id);

  res.send(user);
});

export default router;
