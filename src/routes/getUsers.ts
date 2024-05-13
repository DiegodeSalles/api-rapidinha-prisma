import express from "express";
import { GetUserList } from "../model/user/GetUserList";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await GetUserList();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("Erro interno do servidor.");
    console.log(err);
  }
});

export default router;
