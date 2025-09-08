import express from 'express'
import isAuth from '../middlewares/isAuth.js'
import getAuthUser from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get("/", isAuth, getAuthUser)

export default userRouter