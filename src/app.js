import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.routes.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
dotenv.config()



const PORT = process.env.PORT || 5000
app.listen(5000, () => console.log(`Running server on ${PORT}`))