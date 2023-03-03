import { Item } from './Item';
import { Client } from './Client';

export class Cart {
  private client: Client;
  private items: Item[] = [];

  constructor(client: Client) {
    this.client = client;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  showCart(): void {
    const name = this.client.getName();
    const total: number = this.sumTotal();

    console.log(`CARRINHO \nCliente: ${name} \nItens: ${this.listItems()}\n\nValor Total: R$ ${total}`);
  }

  private listItems(): string {
    const list: string = this.items.reduce((accumulator: string, item: Item): string => {
      const itemdetails = `\n${item.detailItem()}`;
      return accumulator + itemdetails;
    }, '');
    return list;
  }

  private sumTotal(): number {
    const total = this.items.reduce((accumulator: number, item: Item) => {
      const subtotal: number = item.getTotal();
      return accumulator + subtotal;
    }, 0);
    return total;
  }
}
