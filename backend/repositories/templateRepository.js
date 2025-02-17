import Template from "../models/Template.js";
import User from "../models/User.js";

const findPublicTemplatesByUserId = async (userId) => {
  return await Template.findAll({
    where: { author_id: userId, is_public: true },
    attributes: ["id", "title", "description", "topic", "createdAt"],
  });
};

const getUserTemplates = async (userId) => {
  return await Template.findAll({ where: { author_id: userId } });
};

const getUserPublicTemplates = async (userId) => {
  return await Template.findAll({ where: { author_id: userId, is_public: true } });
};

const findTemplateById = async (templateId) => {
  return await Template.findOne({
    where: {
      id: templateId,
    },
    include: [
      { model: User, as: "author", attributes: ["id", "email", "name"] },
    ],
  });
};

const getAllPublicTemplates = async () => {
  return await Template.findAll({
    where: { is_public: true },
    include: [
      { model: User, as: "author", attributes: ["id", "email", "name"] },
    ],
  });
};

const createTemplate = async (templateData) => {
  return await Template.create({
    title: templateData.title,
    description: templateData.description,
    topic: templateData.topic,
    is_public: templateData.is_public,
    author_id: templateData.author_id,
  });
};

const editTemplate = async (template, updates) => {
  return await template.update({
    title: updates.title,
    description: updates.description || template.description,
    topic: updates.topic || template.topic,
    is_public:
      updates.is_public !== undefined ? updates.is_public : template.is_public,
  });
};

const destroyTemplate = async (template) => {
  await template.destroy();
};

const templateRepository = {
  findPublicTemplatesByUserId,
  createTemplate,
  findTemplateById,
  getUserTemplates,
  editTemplate,
  destroyTemplate,
  getAllPublicTemplates,
  getUserPublicTemplates,
};

export default templateRepository;
