import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { ToastrService }from 'ngx-toastr'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  
  constructor(public clientService: ClientsService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllClients()
  }

//   addClient(form: NgForm) {
//      if (!form.value.name) {
//     this.toastr.info('All fields are require', 'Info!')
//     } else {
//     this.clientService.createClient(form.value).subscribe((res)=> 
//     {form.reset(),
//     this.getAllClients(),
//     this.toastr.success('Client created', 'Success!');},
//     (error)=>{
//       this.toastr.error('An error ocurred, try again');
//     }
//     );
//   }
// }

getAllClients(){
  this.clientService.readAllClients().subscribe(
    (res) => {
    this.clientService.clients = res.getClients;
  },
  (err) => {}) 
}

editClient(client: any){
  this.clientService.selectedClient = client;

}

handleSubmitClient(form: NgForm) {
if (form.value._id) {
    this.clientService.updateClient(form.value).subscribe((res)=> 
    {form.reset(),
    this.getAllClients(),
    this.toastr.success('Client update', 'Success!');},
    (error)=>{
      this.toastr.error('An error ocurred, try again');
    }
    );} 
    
    else {
    if (!form.value.name) {
    this.toastr.info('All fields are require', 'Info!')
    } else {
    this.clientService.createClient(form.value).subscribe((res)=> 
    {
    form.reset(),
    this.getAllClients(),
    this.toastr.success('Client created', 'Success!');},
    (error)=>{
      this.toastr.error('An error ocurred, try again');
    }
    );
   }
}  

}

removeClient(id:any){
  this.clientService.deleteClient(id).subscribe(
    (res) => {
      this.getAllClients(),
      this.toastr.success('Client deteled', 'Success!');},
  (err) => {
    this.toastr.error('An error ocurred, try again')
  }) 
}
}