import sequelize from "../config/database.js";
import User from "./User.js";
import Template from "./Template.js";
import Question from "./Question.js";
import Form from "./Form.js";
import Answer from "./Answer.js";
import Comment from "./Comment.js";
import Like from "./Like.js";
import Tag from "./Tag.js";
import TemplateTag from "./TemplateTag.js";

Template.belongsTo(User, { foreignKey: "author_id", as: "author" });
Template.belongsToMany(Tag, {
  through: TemplateTag,
  foreignKey: "template_id",
});

Form.belongsTo(User, { foreignKey: "user_id", as: "user" });
Form.belongsTo(Template, { foreignKey: "template_id", as: "template" });
Template.hasMany(Form, { foreignKey: "template_id", as: "forms" });
User.hasMany(Form, { foreignKey: "user_id", as: "forms" });

Tag.belongsToMany(Template, { through: TemplateTag, foreignKey: "tag_id" });

Template.hasMany(Question, { foreignKey: "template_id", as: "questions" });
Question.belongsTo(Template, { foreignKey: "template_id" });

Answer.belongsTo(Form, { foreignKey: "form_id", as: "form" });
Answer.belongsTo(Question, { foreignKey: "question_id", as: "question" });
Form.hasMany(Answer, { foreignKey: "form_id", as: "answers" });

Comment.belongsTo(User, { foreignKey: "user_id", as: "user" });
Comment.belongsTo(Template, { foreignKey: "template_id", as: "template" });
Template.hasMany(Comment, { foreignKey: "template_id", as: "comments" });
User.hasMany(Comment, { foreignKey: "user_id", as: "comments" });

Like.belongsTo(User, { foreignKey: "user_id", as: "user" });
Like.belongsTo(Template, { foreignKey: "template_id", as: "template" });
Template.hasMany(Like, { foreignKey: "template_id", as: "likes" });
User.hasMany(Like, { foreignKey: "user_id", as: "likes" });

export {
  sequelize,
  User,
  Template,
  Question,
  Form,
  Answer,
  Comment,
  Like,
  Tag,
  TemplateTag,
};
