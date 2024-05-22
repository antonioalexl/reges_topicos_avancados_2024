import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-cliente-frm',
  templateUrl: './cliente-frm.component.html',
  styleUrls: ['./cliente-frm.component.css']
})
export class ClienteFrmComponent implements OnInit {

  cliente: Cliente = {};
  id: number;

  @BlockUI() blockUI?: NgBlockUI;

  constructor(private service: ClientesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.params['id'];



  }

  ngOnInit(): void {

    if (this.id) {
      this.blockUI?.start();
      this.service.GetClientePorId(this.id).subscribe({
        next: (dados) => {
          this.cliente = dados;
          this.blockUI?.reset();
        },
        error(err) {
          console.log('Erro ao obter clientes: ');


        },
        complete: () => { this.blockUI?.reset() } // Stop blocking,
      })
    }
  }



  submit() {


    if (this.id) {
      this.blockUI?.start();
      this.service.Editar(this.cliente).subscribe({

        next: (dados) => {
          alert("Cliente alterado com sucesso");

          this.route.navigate(['clientes']);
          this.blockUI?.reset();

        },
        error(err) {
          console.log('Erro ao inserir clientes: ');

        },
        complete: () => { this.blockUI?.reset() } // Stop blocking,
      })

    }
    else {


      this.blockUI?.start();
      this.service.Adicionar(this.cliente).subscribe({

        next: (dados) => {
       
          alert("Cliente inserido com sucesso");
          
          this.route.navigate(['clientes']);

          this.blockUI?.reset();
        },
        error(err) {
          console.log('Erro ao inserir clientes: ');

        },
        complete: () => { this.blockUI?.reset() } // Stop blocking,
      })

    }



  }

  voltar() {

    this.route.navigate(['clientes']);
  }
}
