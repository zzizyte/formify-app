import express from "express";
import authController from "../controllers/authController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.put("/update-name", authenticateToken, authController.updateUserName);
router.get("/:name", authenticateToken, authController.getUserProfile);

export default router;
