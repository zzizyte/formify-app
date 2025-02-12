import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Template = sequelize.define("Template", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  topic: {
    type: DataTypes.ENUM("Education", "Quiz", "Other"),
    defaultValue: "Other",
  },
  is_public: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  author_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

export default Template;
