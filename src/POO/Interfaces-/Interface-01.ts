export interface Person {
  name: string;
  lastName: string;
  fullName(): string;
}

export class Client implements Person {
  constructor(public name: string, public lastName: string) {}
  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const client1 = new Client('Pedro', 'Magalhães');
console.log(client1.fullName());
