import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Template from "./Template.js";

const Like = sequelize.define("Like", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  template_id: {
    type: DataTypes.UUID,
    allowNull: false,
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
    onDelete: "CASCADE",
  },
});

export default Like;
