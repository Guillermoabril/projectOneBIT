import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../interfaces/schemaClient';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient) { }

  urlBackend = "http://localhost:4000/clients";
  clients: Client[] = [];
  selectedClient: Client = {
    name: "",
lastName: "",
userName: "",
phone: "",
email: "",
password: "",
birthday: "",
preferences: "",
hasCreditCard: false,

  }

  createClient(client: Client){ 
    return this.http.post(this.urlBackend, client)
  }

  readAllClients(){
    return this.http.get<any>(this.urlBackend)
   }
  
   updateClient(client: Client){
    return this.http.put(`${this.urlBackend}/${client._id}`, client);
   }
 
  deleteClient(id:string){
    return this.http.delete<any>(`${this.urlBackend}/${id}`);
   }

}
