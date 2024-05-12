import express from "express";
import { GetPostByUserId } from "../model/post/GetPostByUserId";

const router = express.Router();

router.get("/user/:id/posts", async (req, res) => {
  const authorId = Number(req.params.id);
  const posts = await GetPostByUserId(authorId);

  res.send(posts);
});

export default router;
