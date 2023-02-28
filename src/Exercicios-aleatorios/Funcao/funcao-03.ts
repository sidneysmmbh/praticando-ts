type Person = { name: string; age: number; telephone?: number };
export function creatPerson(
  name: string,
  age: number,
  telephone?: number,
): Person {
  return { name, age, telephone };
}
const student = creatPerson('Pedro', 15);
console.log(student);
