import { Student } from './Student';

describe('Student test', () => {
  let student: Student;

  beforeEach(() => {
    student = new Student('Pedro');
  });

  it('should return student object.', () => {
    expect(student).toBeDefined();
  });

  it("should return the object's attributes.", () => {
    expect(student.name).toBe('Pedro');
    expect(student.notes).toEqual([]);
  });

  it('should add a note.', () => {
    student.addNote(23);
    expect(student.notes[0]).toBe(23);
  });

  it('should return final grade 74.', () => {
    student.addNote(24);
    student.addNote(30);
    student.addNote(20);
    expect(student.displayFinalGrade()).toBe(74);
  });
});
