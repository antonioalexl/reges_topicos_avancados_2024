import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-lst',
  templateUrl: './cliente-lst.component.html',
  styleUrls: ['./cliente-lst.component.css']
})
export class ClienteLstComponent {

  clientes: Array<Cliente> = [];

  constructor(private service: ClientesService){

   this.obterTodos();
    
  }

  obterTodos(){
    this.clientes = this.service.obterTodos();
    console.log(this.clientes);
  

  }

  remover(id:number){

    if(confirm("Deseja remover?")){
    this.service.deletar(id);
    this.obterTodos();
  }
  }

}
