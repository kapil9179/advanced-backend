import { userModel } from "../../models/user.model.js";
import { sendingResponse } from "../../utils/response.js";

// create user
export const userRegistration = async (req, res) => {
  const { name, email, role, password } = req.body;
  try {
    if (!name || !email || !role || !password) {
      sendingResponse(res, 404, "All Field Are Required", null, false);
      return;
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      sendingResponse(res, 409, "You Are Already Register", null, false);
      return;
    }
    const createdUser = new userModel({
      name,
      email,
      password,
      role,
    });
    const savedUser = await createdUser.save();
    if (savedUser) {
      sendingResponse(
        res,
        200,
        "User Registeration Completed!!",
        savedUser,
        true
      );
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      return sendingResponse(res, 400, "Validation error", error.message);
    }
    if (error.code === 11000) {
      return sendingResponse(res, 409, "Duplicate email, user already exists");
    }
    return sendingResponse(res, 500, "Internal Server Error", error.message);
  }
};

// create provider
export const createProviderByAdmin = async()=>{
  const { name, email, role, password } = req.body;
  try{
    if (!name || !email || !role || !password) {
      sendingResponse(res, 404, "All Field Are Required", null, false);
      return;
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      sendingResponse(res, 409, "You Are Already Register", null, false);
      return;
    }
    const createdUser = new userModel({
      name,
      email,
      password,
      role,
    });
    const savedUser = await createdUser.save();
    if (savedUser) {
      sendingResponse(
        res,
        200,
        "User Registeration Completed!!",
        savedUser,
        true
      );
    }
  }catch(error){
    if (error.name === "ValidationError") {
      return sendingResponse(res, 400, "Validation error", error.message);
    }
    if (error.code === 11000) {
      return sendingResponse(res, 409, "Duplicate email, user already exists");
    }
    return sendingResponse(res, 500, "Internal Server Error", error.message);
  }
}



