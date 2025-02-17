import userRepository from "../repositories/userRepository.js";
import generateToken from "./tokenService.js";
import bcrypt from "bcryptjs";

const getUserProfile = async (name) => {
  const user = await userRepository.findUserByName(name);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const registerUser = async (email, password) => {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.createUser(email, hashedPassword);
  const token = generateToken(user);
  return { message: "User registered successfully", token };
};

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    throw error;
  }
  const token = generateToken(user);
  return {
    message: "Login successful",
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
};

const updateName = async (newName, userId) => {
  if (!newName || newName.length < 3) {
    const error = new Error("Name must be at least 3 letters");
    error.status = 400;
    throw error;
  }
  return await userRepository.updateName(newName, userId);
};

const userService = {
  getUserProfile,
  registerUser,
  loginUser,
  updateName,
};
export default userService;
