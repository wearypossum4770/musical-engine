import Sequelize from "sequelize";
import { pbkdf2Sync, randomBytes } from "crypto";
// https://thinkster.io/tutorials/node-json-api/creating-the-user-model
let { STRING, DATEONLY } = Sequelize;
const UserSchema = {
  username: {
    unique: true,
    type: STRING,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  email: {
    unique: true,
    type: STRING,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  firstName: STRING,
  middleName: STRING,
  lastName: STRING,
  dateOfBirth: DATEONLY,
  bio: STRING,
  image: STRING,
  hash: STRING,
  salt: {
    type: STRING,
    get() {
      randomBytes(16).toString("hex");
    },
  },
  password: {
    type: STRING,
    set validPassword(password) {
      let hash = pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString(
        "hex",
      );
      return this.hash === hash;
    },
    set(password) {
      this.setDataValue(
        "password",
        pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex"),
      );
    },
  },
};

export default UserSchema;
