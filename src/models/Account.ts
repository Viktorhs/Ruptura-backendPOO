export class Account {
  id?: number;
  nickname: string;
  email: string;
  password: string;

  constructor(nickname: string, email: string, hashPassword: string) {
    this.nickname = nickname;
    this.email = email;
    this.password = hashPassword;
  }
}
