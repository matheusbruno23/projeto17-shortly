import { Router } from "express";
import { getLoggedUser, getRanking } from "../controllers/users.controllers.js";

const usersRouter = Router()

usersRouter.get("/users/me" , getLoggedUser)
usersRouter.get("/ranking" , getRanking)

export default usersRouter