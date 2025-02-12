import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Template from "./Template.js";
import User from "./User.js";

const Form = sequelize.define("Form", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  template_id: {
    type: DataTypes.UUID,
    references: {
      model: Template,
      key: "id",
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    dataFilled: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
});

export default Form;
