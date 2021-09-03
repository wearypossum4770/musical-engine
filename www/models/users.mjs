import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { Sequelize } from "sequelize";
const { STRING, BOOLEAN, DATE } = Sequelize.DataTypes;
const saltRounds = 10;
export const isAuthenticated = (plainTextPassword, hashedPassword) =>
  compareSync(plainTextPassword, hashedPassword);
const userSchema = {
  firstName: { type: STRING, defaultValue: "" },
  middleName: { type: STRING, defaultValue: "" },
  lastName: { trim: true, type: STRING, defaultValue: "" },
  dateOfBirth: { type: DATE },
  username: { type: STRING, unique: true },
  email: { type: STRING, unique: true, validate: { is: /.+\@.+\..+/ } },
  doNotContact: { type: BOOLEAN, defaultValue: false },
  isActive: { type: BOOLEAN, defaultValue: true },
  lastLogin: { type: DATE, defaultValue: DATE.NOW },
  owaspSafePassword: { type: BOOLEAN, defaultValue: false },
  salt: {
    type: STRING,
    get() {
      return genSaltSync(saltRounds);
    },
  },
  password: {
    admin: false,
    type: STRING,
    set(plainTextPassword) {
      this.setDataValue("password", hashSync(plainTextPassword, this.salt));
    },
  },
  promptPasswordChange: { type: BOOLEAN, defaultValue: false },
  retentionOnly: { type: BOOLEAN, defaultValue: false },
  // indexes: [{ unique: true, fields: ["email"] }],
};

export default userSchema;
