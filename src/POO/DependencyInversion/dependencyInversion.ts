abstract class Tool {
  abstract work(office: string): void;
}

export class Hammer extends Tool {
  work(office: string): void {
    console.log(`${office} está usando o martelo....`);
  }
}

export class Drill extends Tool {
  work(office: string): void {
    console.log(`${office} está usando o furadeira ------`);
  }
}

class Employee {
  constructor(private _office: string, private _tool: Tool) {}
  changeTool(tool: Tool) {
    this._tool = tool;
    console.log('Trocando a ferramenta.');
  }
  work() {
    this._tool.work(this._office);
  }
}
const hammer = new Hammer();
const drill = new Drill();

const funcionario1 = new Employee('pedreiro', hammer);

funcionario1.work();

funcionario1.changeTool(drill);

funcionario1.work();
