import { updateSheetController } from "./../useCases/Sheet/updateSheet/index.js";
import { createSheetController } from "../useCases/Sheet/createSheet/index.js";
import { getUserSheetController } from "../useCases/Sheet/getUserSheet/index.js";
import { listSheetsController } from "../useCases/Sheet/listSheets/index.js";
import { Router } from "express";
import { authenticateToken } from "../middleware/index.js";
import { NextFunction, Request, Response } from "express";
import { deleteSheetController } from "../useCases/Sheet/deleteSheet/index.js";

const sheetRouter = Router();

sheetRouter
  .all("/*", (req: Request, res: Response, next: NextFunction) => authenticateToken.authenticate(req, res, next))
  .get("/list", (req: Request, res: Response) => listSheetsController.handle(req, res))
  .get("/:sheetId", (req: Request, res: Response) => getUserSheetController.handle(req, res))
  .post("/create", (req: Request, res: Response) => createSheetController.handle(req, res))
  .put("/:sheetId", (req: Request, res: Response) => updateSheetController.handle(req, res))
  .delete("/:sheetId", (req: Request, res: Response) => deleteSheetController.handle(req, res));

export default sheetRouter;
