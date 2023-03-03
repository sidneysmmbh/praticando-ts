export class Client {
  protected readonly name: string;
  protected readonly email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }
}
