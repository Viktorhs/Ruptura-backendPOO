import { createSessionController } from "../useCases/Auth/createSession/index.js";
import { createAccountController } from "../useCases/Auth/createAccount/index.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => createAccountController.handle(req, res));
authRouter.post("/sign-in", (req, res) => createSessionController.handle(req, res));

export default authRouter;
