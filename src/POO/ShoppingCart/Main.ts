import { Client } from './Classes/Client';
import { Cart } from './Classes/Cart';
import { products } from './DB/Product';
import { Item } from './Classes/Item';

const client = new Client('Eduardo', 'eduardo@hotm.com');
const cart = new Cart(client);
const item1 = new Item(1, products[0]);
const item2 = new Item(6, products[1]);
const item3 = new Item(1, products[2]);
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);
cart.showCart();
