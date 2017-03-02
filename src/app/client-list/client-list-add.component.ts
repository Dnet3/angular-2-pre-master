import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {Client} from "./client"
import {ClientListService} from "./client-list.service";
@Component({
  selector: 'app-add-client',
  templateUrl: 'client-list-add.component.html'

})
export class ClientListAddComponent implements OnChanges {
 @Input() client: Client;
 @Output() cleared = new EventEmitter();
 isAdd = true;
  constructor(private cls: ClientListService) { }

  ngOnChanges(changes){
    if (changes.client.currentValue == null){
      this.isAdd = true;
      this.client = {accounts: null, email_address: null, name: null };
    }
    else {
      this.isAdd = false;
    }
  }

  onSubmit(client: Client){
    const newClient = new Client(client.accounts, client.email_address, client.name);
    if (!this.isAdd){
      this.cls.editItem(this.client, newClient);
      this.onClear();
    }else {
      this.client = newClient;
      this.cls.addItem(this.client);
    }
  }

  onDelete(){
    this.cls.deleteItem(this.client);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }


  ngOnInit() {
  }

}
