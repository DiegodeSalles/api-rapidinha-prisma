import express from "express";
import PostByUserId from "../model/PostByUserId";

const router = express.Router();

router.get("/user/:id/posts", async (req, res) => {
  const authorId = Number(req.params.id);
  const posts = await PostByUserId(authorId);

  res.send(posts);
});

export default router;
