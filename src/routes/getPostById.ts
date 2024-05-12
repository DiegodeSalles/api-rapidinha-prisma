import express from "express";
import { PostById } from "../model/PostById";

const router = express.Router();

router.get("/user/:authorId/posts/:postId", async (req, res) => {
  const authorId = Number(req.params.authorId);
  const postId = Number(req.params.postId);

  const post = await PostById(authorId, postId);

  res.send(post);
});

export default router;
