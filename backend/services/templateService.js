import templateRepository from "../repositories/templateRepository.js";


const getUserTemplates = async (userId) => {
  return await templateRepository.getUserTemplates(userId);
};

const getAllPublicTemplates = async () => {
  return await templateRepository.getAllPublicTemplates();
};

const findTemplateById = async (templateId) => {
  return await templateRepository.findTemplateById(templateId);
};

const createNewTemplate = async (templateData) => {
  return await templateRepository.createTemplate(templateData);
};

const updateTemplate = async (templateId, template, updates) => {
  await templateRepository.editTemplate(template, updates);
  return await templateRepository.findTemplateById(templateId);
};
const getUserPublicTemplates = async (userId) => {
  return await templateRepository.getUserPublicTemplates(userId);
};

const destroyTemplate = async (template) => {
  await templateRepository.destroyTemplate(template);
  return { success: true };
};

const templateService = {
  getUserPublicTemplates,
  createNewTemplate,
  updateTemplate,
  destroyTemplate,
  findTemplateById,
  getUserTemplates,
  getAllPublicTemplates,
};

export default templateService;
