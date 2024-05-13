import express from "express";
import { GetPostList } from "../model/post/GetPostList";

const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const posts = await GetPostList();

    res.send(posts);
  } catch (err) {
    res.status(500).send("Erro interno do servidor.");
    console.log(err);
  }
});

export default router;
