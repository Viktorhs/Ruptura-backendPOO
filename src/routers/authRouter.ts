import { allowAccessController } from "./../useCases/Auth/allowUserAccess/index.js";
import { createSessionController } from "../useCases/Auth/createSession/index.js";
import { createAccountController } from "../useCases/Auth/createAccount/index.js";
import { Router } from "express";
import { authenticateToken } from "../middleware/index.js";
import { Request, Response, NextFunction } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => createAccountController.handle(req, res));
authRouter.post("/sign-in", (req, res) => createSessionController.handle(req, res));
authRouter.post(
  "/verify",
  (req: Request, res: Response, next: NextFunction) => authenticateToken.authenticate(req, res, next),
  (req, res) => allowAccessController.handle(req, res),
);

export default authRouter;
