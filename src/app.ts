import express, { json, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import authRouter from "./routers/authRouter.js";
import sheetRouter from "./routers/sheetRouter.js";

const path =
  process.env.NODE_ENV === "test" ? ".env.test" : process.env.NODE_ENV === "development" ? ".env.development" : ".env";
const currentEnvs = dotenv.config({ path });
dotenvExpand.expand(currentEnvs);
const app = express();
app
  .use(cors())
  .use(json())
  .use("/user", authRouter)
  .use("/sheet", sheetRouter)
  .use("/health", (req: Request, res: Response) => res.sendStatus(200));

const port = process.env.PORT || 5000;
/* eslint-disable-next-line no-console */
app.listen(port, () => console.log(`Server running in port: ${port}`));
