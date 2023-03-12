import { Student } from './Student';

describe('Student test', () => {
  let student: Student;

  beforeAll(() => {
    student = new Student('Pedro');
  });

  it('should return student object.', () => {
    expect(student).toBeDefined();
  });

  it('should add a note.', () => {
    student.addNote(24);
    expect(student.notes[0]).toBe(24);
  });

  it('should return final grade 74.', () => {
    student.addNote(30);
    student.addNote(20);
    expect(student.displayFinalGrade()).toBe(74);
  });
});
