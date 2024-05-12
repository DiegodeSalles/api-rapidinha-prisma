import express from "express";
import { PostList } from "../model/PostList";

const router = express.Router();

router.get("/posts", async (req, res) => {
  const posts = await PostList();

  res.send(posts);
});

export default router;
