import { Router } from "express";
import { getLoggedUser, getRanking } from "../controllers/users.controllers.js";
import { validateAuth } from "../middlewares/auth.middleware.js";

const usersRouter = Router()

usersRouter.get("/users/me" ,validateAuth ,getLoggedUser)
usersRouter.get("/ranking" , getRanking)

export default usersRouter