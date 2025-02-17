import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database.js";
import Template from "./Template.js";

const Question = sequelize.define("Question", {
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
  description: {
    type: DataTypes.TEXT,
  },
  type: {
    type: DataTypes.ENUM(
      "single-line",
      "multiline",
      "integer",
      "checkbox",
      "dropdown"
    ),
    allowNull: false,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  is_required: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export default Question;
