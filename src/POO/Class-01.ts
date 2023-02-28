export class Person {
  constructor(private name: string) {}
  public speak(): void {
    console.log(`Oi meu nome é ${this.name}`);
  }
}

const person1 = new Person('Nathan');
person1.speak();
