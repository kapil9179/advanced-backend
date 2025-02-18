import express from "express";
const route = express.Router();
import { userRegistration } from "../controller/user/user.register.controller.js";
import { loginUser } from "../controller/user/user.login.controller.js";

route.post("/register", userRegistration).post("/login", loginUser);

export default route;
