export class Person {
  constructor(private name: string) {}
  public speak(): void {
    console.log(`Oi meu nome é ${this.name}`);
  }
}

const person1 = new Person('Nathan');
person1.speak();

function calculateAge(data: string): number {
  const dataOfBirth: string[] = data.split('/');
  const day = +dataOfBirth[0];
  const month = +dataOfBirth[1];
  const year = +dataOfBirth[2];

  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth() + 1;
  const currentDay = d.getDate();

  let years = currentYear - year;

  if (currentMonth < month || (currentMonth == month && currentDay < day)) {
    years--;
  }

  return years < 0 ? 0 : years;
}

class Pessoa {
  public readonly nome: string;
  public readonly sobreNome: string;
  public readonly dateOfBirth: string;
  public readonly years: number;
  constructor(nome: string, sobreNome: string, dateOfBirth: string) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.dateOfBirth = dateOfBirth;
    this.years = calculateAge(this.dateOfBirth);
  }

  public falar(): void {
    console.log(
      `Oi, meu nome é ${this.nome} ${this.sobreNome} nasci em ${this.dateOfBirth} e tenho ${this.years} anos.`,
    );
  }
}

const pessoa1 = new Pessoa('Pedro', 'Resende', '15/03/1991');

pessoa1.falar();
