import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Tag from "./Tag.js";
import Template from "./Template.js";

const TemplateTag = sequelize.define("TemplateTag", {
  tempate_id: {
    type: DataTypes.UUID,
    references: {
      model: Template,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  tag_id: {
    type: DataTypes.UUID,
    references: {
      model: Tag,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default TemplateTag;
