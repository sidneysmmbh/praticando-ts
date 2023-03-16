import { Person } from './models/Person';
import DB from './FakeDB/FakeDB';

const person1 = new Person('Ana Laura', 'Martines', '25/04/1998');
DB.addPerson(person1);
const person2 = new Person('Raquel', 'Lasmar', '15/05/1996');
DB.addPerson(person2);
const person3 = new Person('Andre', 'Resende', '18/08/2002');
DB.addPerson(person3);

console.log(DB.showListPerson());

DB.showListPerson().map((person) => person.presentYourself());
