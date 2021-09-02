import express from "express";
import session from "express-session";
import sessionConfig from "./www/config/sessions.mjs";
import cors from "cors";
import Sequelize from "sequelize";
import userSchema, { isAuthenticated } from "./www/models/users.mjs";
import PostSchema from "./model/posts.mjs";
// import UserSchema from "./model/users.mjs";
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
const User = database.define("users", userSchema);
// https://www.liquidweb.com/kb/using-ssh-keys/
// subdomains mail , userpages, adminpages, portal
var app = express();
// app.use('/vue_socket_test')
app.get("/", (req, res) => res.send("<h1>Hello world</h1>"));
app.use(express.urlencoded(json_url_config));
app.use(express.json(json_url_config));
app.use(cors());
app.use(session(sessionConfig.init));
app.use(sessionConfig.middleware);
app.post("/register", async (req, res) => {
  let instance = await User.build(req.body);
  let { dataValues, isNewRecord: created } = instance;
  // '$2b$10$2gK6W4aOgJHFYBEYtAH2aOQT8e/QnopXMxq19AJzn0dd6ELaGdd02',
  // salt: '$2b$10$2gK6W4aOgJHFYBEYtAH2aO',
  if (!created) {
    res
      .status(500)
      .json({ outgoingMessage: "There was a problem registering the user." });
  } else {
    res
      .status(200)
      .json({ created, outgoingMessage: `new User:${dataValues.username}` });
    // instance.save()
  }
});
app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  let instance = await User.findOne({ where: { username: username } });
  if (!instance)
    return res.status(404).json({ outgoingMessage: "No user found." });
  let auth = await isAuthenticated(password, instance.password);
  return res.status(200).json({ isAuthenticated: auth });
  // if (err) return res.status(500).json({outgoingMessage:"Error on the server."});
});
app.get('/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.redirect('/');
  });
});
database.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `\nCORS-enabled web server.\nlistening to port localhost:${PORT}`,
    );
  });
});
