import express from "express";
import { CreatePost } from "../model/post/CreatePost";

const router = express.Router();

interface PostSchema {
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
}

router.post("/user/:userId/post/create", async (req, res) => {
  const userId = Number(req.params.userId);

  if (!userId || isNaN(userId)) {
    res.status(400).send("Id de usuário inválido.");
    return;
  }

  const postData: PostSchema = req.body;

  try {
    const post = await CreatePost(userId, postData);
    res.status(200).send(post);
  } catch (err) {
    res.status(404).send("Usuário não existe.");
  }
});

export default router;
