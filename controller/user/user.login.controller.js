import { userModel } from "../../models/user.model.js";
import { buildUserToken } from "../../utils/jwt/token.js";
import { sendingResponse } from "../../utils/response.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendingResponse(res, 404, "all field are required", null, false);
    }
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return sendingResponse(
        res,
        404,
        "user Not Found First Register Please",
        null,
        false
      );
    }
    const userToken = buildUserToken(existingUser);
    res.cookie("token", userToken, {
      httpOnly: true,
      sameSite: Strict,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const payload = {
      email: existingUser.email,
      name: existingUser.name,
      role: existingUser.role,
    };
    return sendingResponse(
      res,
      200,
      "userRegisterdSuccessFully",
      payload,
      true
    );
  } catch (error) {
    console.log("error", error);
  }
};
