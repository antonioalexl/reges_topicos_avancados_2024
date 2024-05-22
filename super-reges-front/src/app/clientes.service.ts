import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<Cliente> = [];
  urlApi = "http://localhost:8080/";

  constructor(private http: HttpClient) { }


  public Adicionar(cliente: Cliente): Observable<boolean> {
    return this.http.post<boolean>(this.urlApi + 'cliente', cliente);
  }

  public Editar( cliente: Cliente): Observable<boolean> {
    return this.http.put<boolean>(this.urlApi + 'cliente/' + cliente.id, cliente);
  }
  public Remover(id:number) : Observable<boolean> {
    return this.http.delete<boolean>(this.urlApi + 'cliente/'  + id);
  }

  public GetClientePorId(id: number): Observable<Cliente> {
      return this.http.get<Cliente>(this.urlApi + 'cliente/' + id)
  }

  public GetClientes(): Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(this.urlApi + 'clientes');
  }

  

 /* public inserir(cliente: Cliente) {

    this.clientes.push(cliente);
  }


  public alterar(id: number, cliente: Cliente) {

    var index = this.clientes.findIndex(t => t.id == id);
    this.clientes[index] = cliente;

  }

  public deletar(id: number) {
    var index = this.clientes.findIndex(t => t.id == id);
    this.clientes = this.clientes.splice(index, 1);
  }

  public obterPorId(id: number): Cliente {

    var obj = this.clientes.findIndex(t => t.id == id);
    return this.clientes[obj];
  }

  public obterTodos(): Array<Cliente> {
    return this.clientes;
  }*/


}
