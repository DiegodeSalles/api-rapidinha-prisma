import express from "express";
import { UpdateUser } from "../model/user/UpdateUser";

const router = express.Router();

router.put("/user/:id", async (req, res) => {
  const id = Number(req.params.id);

  const updatedUser = await UpdateUser(id, req.body);

  res.send(updatedUser);
});

export default router;
