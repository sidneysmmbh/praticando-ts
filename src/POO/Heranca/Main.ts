import { Employee } from './Classes/Employee';
import { Student } from './Classes/Student';

const student1 = new Student('Andre', 'andre@dndln.com', 512);
console.log(student1.studentData);

const employee1 = new Employee('Eduardo', 'eduardo@hotmail.com', 'Professor');
console.log(employee1.employeeData);
