import express from "express";
import { UpdateUser } from "../model/user/UpdateUser";

const router = express.Router();

router.put("/user/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  if (!userId || isNaN(userId)) {
    res.status(400).send("Id de usuário inválido.");
    return;
  }

  try {
    const updatedUser = await UpdateUser(userId, req.body);

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(404).send("Usuário não existe.");
  }
});

export default router;
