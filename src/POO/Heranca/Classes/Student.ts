import { Person } from './Person';

export class Student extends Person {
  constructor(name: string, email: string, private _classroom: number) {
    super(name, email);
  }
  get studentData(): string {
    return `Nome: ${this.name} | E-mail:${this.email} | Sala: ${this._classroom}`;
  }
}

const student1 = new Student('Andre', 'andre@dndln.com', 512);
console.log(student1.studentData);
