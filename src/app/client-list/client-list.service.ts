import { Client } from "./client";


export class ClientListService {
private items: Client[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Client[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Client) {
    this.items.push(item);
  }

  editItem(oldItem: Client, newItem: Client) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Client) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
