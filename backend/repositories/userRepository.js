import User from "../models/User.js";

const findUserByName = async (name) => {
  return await User.findOne({
    where: { name: name },
  });
};

const findUserByEmail = async (email) => {
  return await User.findOne({
    where: { email },
    attributes: ["id", "name", "email", "password", "createdAt"],
  });
};

const createUser = async (email, hashedPassword) => {
  return await User.create({ email, password: hashedPassword });
};

const updateName = async (newName, userId) => {
  const existingUser = await User.findOne({ where: { name: newName } });
  if (existingUser) {
    const error = new Error("Name already used");
    error.status = 400;
    throw error;
  }
  await User.update({ name: newName }, { where: { id: userId } });
};

const userRepository = {
  findUserByName,
  createUser,
  findUserByEmail,
  updateName,
};
export default userRepository;
