const express= require("express");

const UserRouter = express.Router();
const RegisterUser = require("../controller/RegisterUser");
const LoginUser = require("../controller/LoginUser");

UserRouter.post("/register",RegisterUser);
UserRouter.post("/login",LoginUser);