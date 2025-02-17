import Template from "../models/Template.js";
const authorizeOwnerOrAdmin = async (req, res, next) => {
  const { id } = req.params;

  const template = await Template.findByPk(id);
  if (!template) {
    return res.status(404).json({ message: "Template not found" });
  }
  if (req.user.id !== template.author_id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized action" });
  }
  req.template = template;
  next();
};

export default authorizeOwnerOrAdmin;
