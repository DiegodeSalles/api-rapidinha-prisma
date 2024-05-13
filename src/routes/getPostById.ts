import express from "express";
import { GetPostById } from "../model/post/GetPostById";

const router = express.Router();

router.get("/user/:authorId/post/:postId", async (req, res) => {
  const authorId = Number(req.params.authorId);
  const postId = Number(req.params.postId);
  if (!postId || isNaN(postId) || !authorId || isNaN(authorId)) {
    res.status(400).send("Id de usuário ou post inválido.");
    return;
  }

  try {
    const post = await GetPostById(authorId, postId);

    res.status(200).send(post);
  } catch (err) {
    res.status(404).send("Usuário ou post não existe.");
  }
});

export default router;
