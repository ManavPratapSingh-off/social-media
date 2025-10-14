import express from "express"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multerConfig.js"
import { get_all_posts, upload_post } from "../controllers/post.controller.js"

const postRouter = express.Router()

postRouter.post("/upload", isAuth, upload.single("media_url"), upload_post)
postRouter.get("/", get_all_posts)

export default postRouter