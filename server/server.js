const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const users = require("./routes/user.routes");
const posts = require("./routes/posts.routes")

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/user", users);
app.use("/posts", posts);

app.get("/", async (req, res) => {
  const p = await db.query("select * from users");
  res.json(p);
});

app.listen(process.env.PORT, () => {
  console.log(`Сервер работает на порту: ${port}`);
});
