import Sequelize from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { pbkdf2Sync, randomBytes } from "crypto";
let { STRING, DATEONLY, BOOLEAN, UUID, INTEGER, UUIDV4 } = Sequelize;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const privateKey = readFileSync(`${__dirname}/pem/key.pem`);
const saltRounds = 10;
const createSalt = (size = 16) => randomBytes(size).toString("hex");
const setPassword = password =>
  pbkdf2Sync(password, createSalt(), 10000, 512, "sha512").toString("hex");
const validPassword = (password, hash, salt) =>
  hash ===
  crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
export const UserSchema = {
  externalID: {
    type: INTEGER,
    autoIncrement: true,
  },
  internalID: {
    defaultValue: UUIDV4,
    type: UUID,
    primaryKey: true,
    unique: true,
  },
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
  webtoken: {
    type: STRING,
    defaultValue: jwt.sign({ foo: "bar" }, privateKey, { algorithm: "RS256" }),
  },
  salt: {
    type: STRING,
    defaultValue: bcrypt.genSaltSync(saltRounds),
  },
  useablePassword: {
    type: BOOLEAN,
    get() {
      return (
        this.hash === bcrypt.hashSync(this.getDataValue("password"), this.salt)
      );
    },
  },
  password: {
    type: STRING,
    set(password) {
      let hash = bcrypt.hashSync(password, this.salt);
      this.setDataValue("password", hash);
    },
  },
};
export default UserSchema;
