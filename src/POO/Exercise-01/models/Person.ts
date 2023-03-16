import { calculateAge } from '../services/CalculateAge';

export class Person {
  constructor(private nome: string, private sobreNome: string, private dateOfBirth: string) {}

  public presentYourself(): void {
    const years = calculateAge(this.dateOfBirth);
    console.log(`Oi, meu nome é ${this.nome} ${this.sobreNome} nasci em ${this.dateOfBirth} e tenho ${years} anos.`);
  }
}

const pessoa1 = new Person('Pedro', 'Resende', '15/03/1992');

pessoa1.presentYourself();
