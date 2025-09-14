import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import AuthRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.routes.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000   
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

connectDB()

app.get('/', (req, res) => {
    res.send("Home Page")
}) 

app.use("/api/auth", AuthRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log("server is running on port 8000");
})