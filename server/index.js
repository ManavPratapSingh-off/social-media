import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import AuthRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000   
app.use(express.json())
app.use(cookieParser())

connectDB()

app.get('/', (req, res) => {
    res.send("Home Page")
}) 

app.use("/api/auth", AuthRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log("server is running on port 8000");
})