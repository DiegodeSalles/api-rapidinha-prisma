import express from "express";
import { DeleteUser } from "../model/user/DeleteUser";

const router = express.Router();

router.delete("/user/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  if (!userId || isNaN(userId)) {
    res.status(400).send("Id de usuário inválido.");
    return;
  }
  try {
    await DeleteUser(userId);

    res.status(204).send();
  } catch (err) {
    res.status(404).send("Usuário não existe.");
    console.log(err);
  }
});

export default router;
