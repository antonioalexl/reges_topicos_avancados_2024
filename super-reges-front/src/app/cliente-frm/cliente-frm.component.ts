import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-frm',
  templateUrl: './cliente-frm.component.html',
  styleUrls: ['./cliente-frm.component.css']
})
export class ClienteFrmComponent {

  cliente: Cliente = {};

  constructor(private service: ClientesService, private route: Router){


  }

  submit(){
    this.cliente.id = 1;
    this.service.inserir(this.cliente);
    console.table(this.service.obterTodos());
    this.route.navigate(['clientes']);
  }

  voltar(){

    this.route.navigate(['clientes']);
  }
}
