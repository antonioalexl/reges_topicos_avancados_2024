import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";


@Component({
  selector: 'app-cliente-lst',
  templateUrl: './cliente-lst.component.html',
  styleUrls: ['./cliente-lst.component.css']
})
export class ClienteLstComponent {

  clientes: Array<Cliente> = [];
  @BlockUI() blockUI?: NgBlockUI;

  constructor(private service: ClientesService) {




    this.obterTodos();

  }

  obterTodos(): void {

    this.blockUI?.start('Loading...'); // Start blocking

    this.service.GetClientes().subscribe({
      next: (dados) => {
        this.clientes = dados;
        this.blockUI?.reset();
      },
      error(err) {
        console.log('Erro ao obter clientes: ');


      },
      complete: () => { this.blockUI?.reset() } // Stop blocking,
    })

  }





  remover(id: number) {

    if (confirm("Deseja remover?")) {
      this.blockUI?.start('Loading...'); // Start blocking
      this.service.Remover(id).subscribe({

        next: (dados) => {
          this.obterTodos();
          this.blockUI?.reset();
        },
        error(err) {
          console.log('Erro ao remover clientes: ');
  
  
        },
        complete: () => { this.blockUI?.reset() } // Stop blocking,

      })

    
     
    }
  }

}
