import { AllowAccessController } from "./AllowUserAccessController.js";
import { AllowAccessService } from "./AllowUserAccessService.js";
import { VerifyToken } from "./../../../repositories/auth-repository/VerifyToken.js";

const verifyToken = new VerifyToken();
const allowAccessService = new AllowAccessService(verifyToken);
export const allowAccessController = new AllowAccessController(allowAccessService);
