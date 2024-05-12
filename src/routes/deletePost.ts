import express from "express";
import { DeletePost } from "../model/DeletePost";

const router = express.Router();

router.delete("/user/:authorId/posts/:id", async (req, res) => {
  const id = Number(req.params.id);
  const authorId = Number(req.params.authorId);

  const post = await DeletePost(id, authorId);

  res.send(post);
});

export default router;
