export class Student {
  constructor(private _name: string, private readonly _notes: number[] = []) {}

  addNote(note: number) {
    this._notes.push(note);
  }

  get notes(): number[] {
    return this._notes;
  }

  displayFinalGrade(): number {
    const finalGrade: number = this._notes.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);

    return finalGrade;
  }
}
