import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database.js";
import Form from "./Form.js";
import Question from "./Question.js";

const Answer = sequelize.define("Answer", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  form_id: {
    type: DataTypes.UUID,
    references: {
      model: Form,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  question_id: {
    type: DataTypes.UUID,
    references: {
      model: Question,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  response: {
    type: DataTypes.TEXT,
  },
});

export default Answer;
