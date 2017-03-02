import {Client} from "../client-list/client";
export class Arduino {

  constructor(  public address:string, public drivers:string, public managers:string, public phone_number:string, public type:string,
   public clients: Client[]){}

}
