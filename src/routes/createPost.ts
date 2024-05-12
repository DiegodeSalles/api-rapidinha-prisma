import express from "express";
import { PostCreate } from "../model/PostCreate";

const router = express.Router();

interface PostSchema {
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
}

router.post("/user/:id/post", async (req, res) => {
  const userId = Number(req.params.id);
  const postData: PostSchema = req.body;
  const post = await PostCreate(userId, postData);

  res.send(post);
});

export default router;
