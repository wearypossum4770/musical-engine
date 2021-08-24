import express from "express";
import cors from "cors";
import Sequelize from "sequelize";
import finale from "finale-rest";
const PORT = 3001;
const json_url_config = { limit: "1mb", extended: true };
let { STRING, TEXT, ENUM } = Sequelize;
var app = express();
const database = new Sequelize({
  dialect: "sqlite",
  storage: "./test.sqlite",
  timestamps: true,
});
const Post = database.define("posts", {
  title: STRING,
  body: TEXT,
  visibility: ENUM("public", "private"),
});
const User = database.define("users", {
  username: STRING,
  email: STRING,
  firstName: STRING,
  middleName: STRING,
  lastName: STRING,
});

// subdomains mail , userpages, adminpages, portal
app.use(express.urlencoded(json_url_config));
app.use(express.json(json_url_config));
app.use(cors());
app.post("/users", async (req, res) => {
  try {
    let user = await User.build(req.body);
    let { dataValues, isNewRecord: created } = user;
    if (created) {
      res.status(201).json({ created: `new User:${dataValues.username}` });
      user.save();
      return;
    } else {
      res.status(405).json({ outgoingMessage: "Invalid URL" });
    }
  } catch (err) {
    console.log(err);
  } finally {
    await database.sync({ force: true });
    console.log("All models were synchronized successfully.");
  }
});
app.get("/users", async (req, res) => {
  let users = await User.findAll();
  res.json(users);
});

database.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `\nCORS-enabled web server.\nlistening to port localhost:${PORT}`,
    );
  });
});
