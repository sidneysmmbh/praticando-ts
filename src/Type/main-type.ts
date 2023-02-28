import { Person, add } from './type';

const student1: Person = {
  name: 'Raquel',
  street: 'amazonas',
  number: 4557,
  email: 'Raquel@hotmail.com',
};
const student2: Person = {
  name: 'Roberto',
  street: 'Ponta Nova',
  number: 213,
};
console.log(student1);
console.log(student2);

const addNumber: add = (number1, number2) => {
  return number1 + number2;
};

console.log(addNumber(5, 9));
