import { Router } from "express";
import { deleteUrl, getUrl, openUrl, shortUrl } from "../controllers/urls.controllers.js";
import { validateSchema } from "../middlewares/validation.middleware.js";
import { urlSchema } from "../schemas/urls.schemas.js";
import { validateAuth } from "../middlewares/auth.middleware.js";

const urlsRouter = Router()

urlsRouter.post("/urls/shorten" ,validateSchema(urlSchema) , validateAuth ,shortUrl)
urlsRouter.get("/urls/:id" , getUrl)
urlsRouter.get("/urls/open/:shortUrl" , openUrl)
urlsRouter.delete("/urls/:id" , validateAuth, deleteUrl)

export default urlsRouter