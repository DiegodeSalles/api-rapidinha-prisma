import express from "express";
import { GetUserById } from "../model/user/GetUserById";

const router = express.Router();

router.get("/user/:userId", async (req, res) => {
  const userId = Number(req.params.userId);
  if (!userId || isNaN(userId)) {
    res.status(400).send("Id de usuário inválido.");
  }
  try {
    const user = await GetUserById(userId);

    res.status(200).send(user);
  } catch (err) {
    res.status(404).send("Usuário não existe.");
  }
});

export default router;
