import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,       //a frontend URL from which request are comming 
    credentials: true
}))
app.use(express.json({limit: "500kb"}))
app.use(express.urlencoded({extended: true, limit: "500kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use('/users', userRouter)


export {app}