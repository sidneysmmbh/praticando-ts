export class Person {
  constructor(private name: string) {}
  public speak(): void {
    console.log(`Oi meu nome é ${this.name}`);
  }
}

const person1 = new Person('Nathan');
person1.speak();

class Pessoa {
  public readonly nome: string;
  public readonly sobreNome: string;
  constructor(nome: string, sobreNome: string) {
    this.nome = nome;
    this.sobreNome = sobreNome;
  }
  public falar(): void {
    console.log(`Oi, meu nome é ${this.nome} ${this.sobreNome}`);
  }
}

const pessoa1 = new Pessoa('Pedro', 'Resende');

pessoa1.falar();
