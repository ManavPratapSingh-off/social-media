import sign_up from "../controllers/auth.controllers.js";
import express from "express"

const AuthRouter = express.Router()

AuthRouter.post("/sign-up", sign_up)

export default AuthRouter