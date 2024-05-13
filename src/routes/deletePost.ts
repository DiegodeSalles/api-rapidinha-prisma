import express from "express";
import { DeletePost } from "../model/post/DeletePost";

const router = express.Router();

router.delete("/user/:authorId/posts/:postId", async (req, res) => {
  const postId = Number(req.params.postId);
  const authorId = Number(req.params.authorId);
  if (!postId || isNaN(postId) || !authorId || isNaN(authorId)) {
    res.status(400).send("Id de usuário ou post inválido.");
  }

  try {
    await DeletePost(postId, authorId);

    res.status(204);
  } catch (err) {
    res.status(404).send("Usuário ou post não existe.");
  }
});

export default router;
