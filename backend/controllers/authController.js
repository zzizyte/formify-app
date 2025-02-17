import userService from "../services/userService.js";

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.registerUser(email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const updateUserName = async (req, res) => {
  try {
    const { newName } = req.body;
    const userId = req.user.id;
    await userService.updateName(newName, userId);
    res.json({ message: "Name updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const name = decodeURIComponent(req.params.name);
    const user = await userService.getUserProfile(name);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const authController = {
  login,
  register,
  updateUserName,
  getUserProfile,
};

export default authController;
