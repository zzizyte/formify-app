import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database.js";
import Template from "./Template.js";
import User from "./User.js";

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  template_id: {
    type: DataTypes.UUID,
    references: {
      model: Template,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Comment;
