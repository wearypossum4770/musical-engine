import express from "express";
import session  from "express-session";
import sessionConfig from './www/config/sessions.mjs'
import cors from "cors";
import Sequelize from "sequelize";
import PostSchema from "./model/posts.mjs";
import UserSchema from "./model/users.mjs";
import WebTokenSchema from "./model/webtokens.mjs";
const PORT = 3002;
const json_url_config = { limit: "1mb", extended: true };
const database = new Sequelize({
  dialect: "sqlite",
  storage: "./test.sqlite",
  timestamps: true,
  deletedAt: "destroyTime",
  // paranoid: true
});
const Token = database.define("web_tokens", WebTokenSchema);
const Post = database.define("posts", PostSchema);
const User = database.define("users", UserSchema);
// https://www.liquidweb.com/kb/using-ssh-keys/
// subdomains mail , userpages, adminpages, portal
var app = express();
// app.use('/vue_socket_test')
app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));
app.use(express.urlencoded(json_url_config));
app.use(express.json(json_url_config));
app.use(cors());
app.use(session(sessionConfig.init));
app.use(sessionConfig.middleware())
app.post("/register", async (req, res) => {
  let instance = await User.build(req.body);
  let { dataValues, isNewRecord: created } = instance;
  if (!created) {
    res
      .status(500)
      .json({ outgoingMessage: "There was a problem registering the user." });
  }
  res
    .status(200)
    .json({ created, outgoingMessage: `new User:${dataValues.username}` });
  // instance.save()
});

app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  let instance = await User.findAll({
    where: { username },
    attributes: [
      "username",
      "password",
      "webtoken",
      "password",
      "useablePassword",
    ],
    offset: 5,
    limit: 5,
  });
  if (!instance)
    return res.status(404).json({ outgoingMessage: "No user found." });
  // if (err) return res.status(500).json({outgoingMessage:"Error on the server."});
});
database.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `\nCORS-enabled web server.\nlistening to port localhost:${PORT}`,
    );
  });
});
