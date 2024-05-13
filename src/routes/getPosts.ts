import express from "express";
import { GetPostList } from "../model/post/GetPostList";

const router = express.Router();

router.get("/users/posts", async (req, res) => {
  try {
    const posts = await GetPostList();

    res.status(201).send(posts);
  } catch (err) {
    res.status(500).send("Erro interno do servidor.");
    console.log(err);
  }
});

export default router;
