export class Session {
  id?: number;
  userId: number;
  token: string;

  constructor(userId: number, token: string) {
    this.userId = userId;
    this.token = token;
  }
}
