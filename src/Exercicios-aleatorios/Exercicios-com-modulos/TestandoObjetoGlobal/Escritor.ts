class Escritor {
  constructor() {
    console.log('Escritor foi criado uma única vez.');
  }
  escrever() {
    console.log('Escrevendo o texto.');
  }
}

export default new Escritor();
