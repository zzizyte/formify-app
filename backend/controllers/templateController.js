import Template from "../models/Template.js";
import templateService from "../services/templateService.js";

const createTemplate = async (req, res) => {
  try {
    const { title, description, topic, is_public } = req.body;
    const userId = req.user.id;
    const template = await templateService.createNewTemplate({
      title,
      description,
      topic,
      is_public,
      author_id: userId,
    });
    res.status(201).json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getAllTemplates = async (req, res) => {
//   try {
//     const templates = await Template.findAll({
//       include: [{ model: User, as: "author", attributes: ["id", "email"] }],
//     });
//     res.json(templates);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const editTemplate = async (req, res) => {
  try {
    const { title, description, topic, is_public } = req.body;
    const templateId = req.params.id;
    const template = req.template;
    const updatedTemplate = await templateService.updateTemplate(
      templateId,
      template,
      {
        title,
        description,
        topic,
        is_public,
      }
    );
    res.status(200).json(updatedTemplate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTemplate = async (req, res) => {
  try {
    const template = req.template;
    await templateService.destroyTemplate(template);
    res.status(200).json({ message: "Template deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUserTemplates = async (req, res) => {
  try {
    const userId = req.user.id;
    const templates = await templateService.getUserTemplates(userId);
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserPublicTemplates = async (req, res) => {
  try {
    const userId = req.params.id;
    const templates = await templateService.getUserPublicTemplates(userId);
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTemplateById = async (req, res) => {
  try {
    const templateId = req.params.id;
    const template = await templateService.findTemplateById(templateId);
    res.json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPublicTemplates = async (req, res) => {
  try {
    const templates = await templateService.getAllPublicTemplates();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const templateController = {
  createTemplate,
  // getAllTemplates,
  editTemplate,
  deleteTemplate,
  getAllUserTemplates,
  getTemplateById,
  getAllPublicTemplates,
  getUserPublicTemplates,
};

export default templateController;
