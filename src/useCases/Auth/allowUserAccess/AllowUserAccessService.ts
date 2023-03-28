import { VerifyToken } from "./../../../repositories/auth-repository/VerifyToken.js";
export class AllowAccessService {
  constructor(private VerifyToken: VerifyToken) {}

  async execute(token: string) {
    const isValid = await this.VerifyToken.getUnique(token);

    if (!isValid) {
      throw {
        name: "UnauthorizedError",
        message: "invalid operation",
      };
    }
  }
}
