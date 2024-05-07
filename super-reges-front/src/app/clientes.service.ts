import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<Cliente> = [];

  public inserir(cliente:Cliente) {

    this.clientes.push(cliente);
  }
  
  public alterar(id:number, cliente:Cliente){

    var index = this.clientes.findIndex(t=>t.id == id);
    this.clientes[index] = cliente;

  }

  public deletar(id:number){
    var index = this.clientes.findIndex(t=>t.id == id);
    this.clientes = this.clientes.splice(index,1);
  }

  public obterPorId(id:number) : Cliente{

    var obj = this.clientes.findIndex(t=>t.id==id);
    return this.clientes[obj];
  }

  public obterTodos() : Array<Cliente>
  {
    return this.clientes;
  }

  constructor() { }
}
