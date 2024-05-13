import express from "express";
import { GetPostByUserId } from "../model/post/GetPostByUserId";

const router = express.Router();

router.get("/user/:userId/posts", async (req, res) => {
  const userId = Number(req.params.userId);
  if (!userId || isNaN(userId)) {
    res.status(400).send("Id de usuário inválido.");
    return;
  }
  try {
    const posts = await GetPostByUserId(userId);

    res.status(200).send(posts);
  } catch (err) {
    res.status(404).send("Usuário não existe.");
  }
});

export default router;
