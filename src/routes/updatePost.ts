import express from "express";
import { UpdatePost } from "../model/post/UpdatePost";

const router = express.Router();

router.put("/user/:authorId/post/:postId", async (req, res) => {
  const authorId = Number(req.params.authorId);
  const postId = Number(req.params.postId);
  if (!postId || isNaN(postId) || !authorId || isNaN(authorId)) {
    res.status(400).send("Id de usuário ou post inválido.");
  }
  try {
    const postData = req.body;

    const post = await UpdatePost(authorId, postId, postData);

    res.status(200).send(post);
  } catch (err) {
    res.status(404).send("Usuário ou post não existe.");
  }
});

export default router;
