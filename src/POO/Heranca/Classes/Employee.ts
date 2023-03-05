import { Person } from './Person';

export class Employee extends Person {
  constructor(name: string, email: string, private _offic: string) {
    super(name, email);
  }

  get employeeData(): string {
    return `Nome: ${this.name} | E-mail:${this.email} | Cargo: ${this._offic}`;
  }
}
