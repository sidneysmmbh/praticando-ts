export class Person {
  constructor(public name: string) {}
  falar() {
    return `Meu nome é ${this.name}`;
  }
}
