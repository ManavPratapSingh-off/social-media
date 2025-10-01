import express from 'express'
import isAuth from '../middlewares/isAuth.js'
import {get_param_user, getAuthUser, patch_profile_details} from '../controllers/user.controller.js'
import check_updates from '../middlewares/checkUpdates.js'

const userRouter = express.Router()

userRouter.get("/", isAuth, getAuthUser)
userRouter.get("/profile/:user_name", get_param_user)
userRouter.patch("/profile/:_id", check_updates, patch_profile_details)

export default userRouter