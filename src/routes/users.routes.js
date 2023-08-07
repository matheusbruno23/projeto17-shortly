import { Router } from "express";
import { getLoggedUser, getUserRanking } from "../controllers/users.controllers.js";
import { validateAuth } from "../middlewares/auth.middleware.js";

const usersRouter = Router()

usersRouter.get("/users/me" ,validateAuth ,getLoggedUser)
usersRouter.get("/ranking" , getUserRanking)

export default usersRouter