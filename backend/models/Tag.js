import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Tag = sequelize.define("Tag", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Tag;
