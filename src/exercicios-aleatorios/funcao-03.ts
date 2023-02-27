type person = { name: string; age: number };
export function creatPerson(name: string, age: number): person {
  return { name, age };
}
const student = creatPerson('Pedro', 15);
console.log(student);
