import { Component, OnInit } from '@angular/core';
import {Client} from "./client";
import {ClientListService} from "./client-list.service"

@Component({
  selector: 'app-client-list',
  templateUrl: 'client-list.component.html'

})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client = null;
  constructor(private cls: ClientListService) { }

  ngOnInit() {
    this.clients = this.cls.getItems();
  }

  onSelectedClient(client: Client){
    this.selectedClient = client;
  }

  onCleared(){
    this.selectedClient = null;
  }


}
