import formService from "../services/formService.js";

const createForm = async (req, res) => {
  try {
    const newForm = await formService.createForm();
  } catch (error) {}
};

const formController = {};
export default formController;
