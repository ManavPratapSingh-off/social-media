import express from "express"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multerConfig.js"
import { upload_post } from "../controllers/post.controller.js"

const postRouter = express.Router()

postRouter.post("/upload", isAuth, upload.single("post_media"), upload_post)
// postRouter.get("")

export default postRouter