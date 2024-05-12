import express from "express";
import { GetPostById } from "../model/post/GetPostById";

const router = express.Router();

router.get("/user/:authorId/posts/:postId", async (req, res) => {
  const authorId = Number(req.params.authorId);
  const postId = Number(req.params.postId);

  const post = await GetPostById(authorId, postId);

  res.send(post);
});

export default router;
