type Name = { name: string };
type Address = { street: string; number: number };
type Telephone = { email?: string };

type Person = Name & Address & Telephone;

type add = (number1: number, number2: number) => number;

export { Person, add };
