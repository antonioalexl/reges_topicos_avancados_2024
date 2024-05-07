import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFrmComponent } from './cliente-frm/cliente-frm.component';
import { ClienteLstComponent } from './cliente-lst/cliente-lst.component';

const routes: Routes = [
{path: "cliente", component: ClienteFrmComponent},
{path: "clientes", component: ClienteLstComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
