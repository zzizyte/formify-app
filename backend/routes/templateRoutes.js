import express from "express";
import templateController from "../controllers/templateController.js";
import authenticateToken from "../middlewares/authenticateToken.js";
import authorizeOwnerOrAdmin from "../middlewares/authorizeOwnerOrAdmin.js";

const {
  createTemplate,
  // getAllTemplates,
  editTemplate,
  deleteTemplate,
  getAllUserTemplates,
  getTemplateById,
  getAllPublicTemplates,
  getUserPublicTemplates,
} = templateController;

const router = express.Router();

router.get("/", getAllPublicTemplates);
router.get("/my-templates", authenticateToken, getAllUserTemplates);
router.post("/create-new", authenticateToken, createTemplate);

router.get("/:id/public", getUserPublicTemplates);
router.get("/:id", getTemplateById);
router.put("/:id/edit", authenticateToken, authorizeOwnerOrAdmin, editTemplate);
router.delete("/:id", authenticateToken, authorizeOwnerOrAdmin, deleteTemplate);

export default router;
