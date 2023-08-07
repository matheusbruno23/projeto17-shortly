import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validation.middleware.js";
import { userSchema } from "../schemas/users.schemas.js";
import { authSchema } from "../schemas/auth.schemas.js";

const authRouter = Router()

authRouter.post("/signup" , validateSchema(userSchema) , signUp)
authRouter.post("/signin", validateSchema(authSchema)  , signIn)

export default authRouter