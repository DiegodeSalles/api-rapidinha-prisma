import express from "express";
import { GetPostList } from "../model/post/GetPostList";

const router = express.Router();

router.get("/posts", async (req, res) => {
  const posts = await GetPostList();

  res.send(posts);
});

export default router;
