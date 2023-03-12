import { Person } from './Person';

describe('Testando a classe Person', () => {
  it('Criação do objeto.', () => {
    const person = new Person('Lucas');
    const fala = person.falar();
    expect(fala).toBe('Meu nome é Lucas');
  });
});
