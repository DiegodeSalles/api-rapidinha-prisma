import express from "express";
import createUser from "./routes/createUser";
import userList from "./routes/getUsers";
import getUser from "./routes/getUserById";
import updateUser from "./routes/updateUser";
import deleteUser from "./routes/deleteUser";
import createPost from "./routes/createPost";
import postList from "./routes/getPosts";
import postsByUserId from "./routes/getPostsByUserId";

const app = express();
const port = 3000;

app.use(express.json());

app.use(createUser);
app.use(userList);
app.use(getUser);
app.use(updateUser);
app.use(deleteUser);
app.use(createPost);
app.use(postList);
app.use(postsByUserId);

app.listen(port, () => {
  console.log(`Servidor inciado em http://localhost:${port}`);
});
