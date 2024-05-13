import express from "express";
import createUser from "./routes/createUser";
import userList from "./routes/getUsers";
import getUser from "./routes/getUserById";
import updateUser from "./routes/updateUser";
import deleteUser from "./routes/deleteUser";
import createPost from "./routes/createPost";
import postList from "./routes/getPosts";
import postsByUserId from "./routes/getPostsByUserId";
import getPostById from "./routes/getPostById";
import deletePost from "./routes/deletePost";
import updatePost from "./routes/updatePost";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(createUser);
app.use(userList);
app.use(getUser);
app.use(updateUser);
app.use(deleteUser);
app.use(createPost);
app.use(postList);
app.use(postsByUserId);
app.use(getPostById);
app.use(deletePost);
app.use(updatePost);

app.listen(port, () => {
  console.log(`Servidor inciado em http://localhost:${port}`);
});
