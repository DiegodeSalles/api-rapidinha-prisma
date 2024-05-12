import express from "express";
import { UpdatePost } from "../model/UpdatePost";

const router = express.Router();

router.put("/user/:authorId/posts/:id", async (req, res) => {
  const authorId = Number(req.params.authorId);
  const id = Number(req.params.id);
  const postData = req.body;

  const post = await UpdatePost(authorId, id, postData);

  res.send(post);
});

export default router;
