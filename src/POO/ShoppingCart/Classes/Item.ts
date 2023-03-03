import { Product } from '../DB/Product';

export class Item {
  protected readonly amount: number;
  protected readonly product: Product;
  protected readonly total: number = 0;

  constructor(amount: number, product: Product) {
    this.amount = amount;
    this.product = product;
    this.total = amount * product.value;
  }

  getTotal(): number {
    return this.total;
  }

  detailItem(): string {
    return `Unidade: ${this.amount} | ${this.product.name} | valor: R$ ${this.total}`;
  }
}
