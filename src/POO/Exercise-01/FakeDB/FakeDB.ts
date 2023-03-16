import { Person } from '../models/Person';

class DB {
  constructor() {}
  private readonly listPerson: Person[] = [];

  public addPerson(person: Person): void {
    this.listPerson.push(person);
  }

  public showListPerson(): Person[] {
    return this.listPerson;
  }
}

export default new DB();
