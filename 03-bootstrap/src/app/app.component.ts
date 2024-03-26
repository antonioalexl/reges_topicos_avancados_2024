import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-bootstrap';

  exibirTabela: boolean = false;

   mostrarTabela() {
    this.exibirTabela = true;

   }

   herois = [
    {id: 1, nome: "Batman", universo: "DC"},
    {id: 2, nome: "Superman", universo: "DC"},
    {id: 3, nome: "Mulher Maravilha", universo: "DC"},
    {id: 4, nome: "Flash", universo: "DC"},
    {id: 5, nome: "Aquaman", universo: "DC"},
    {id: 6, nome: "Ciborgue", universo: "DC"},
    {id: 7, nome: "Lanterna Verde", universo: "DC"},
    {id: 8, nome: "Batgirl", universo: "DC"},
    {id: 9, nome: "Robin", universo: "DC"},
    {id: 10, nome: "Coringa", universo: "DC"},
    {id: 11, nome: "Arqueiro Verde", universo: "DC"},
    {id: 12, nome: "Caçador de Marte", universo: "DC"},
    {id: 13, nome: "Supergirl", universo: "DC"},
    {id: 14, nome: "Capitão Marvel (Shazam)", universo: "DC"},
    {id: 15, nome: "Besouro Azul", universo: "DC"},
    {id: 16, nome: "Ravena", universo: "DC"},
    {id: 17, nome: "Estelar", universo: "DC"},
    {id: 18, nome: "Asa Noturna", universo: "DC"},
    {id: 19, nome: "Batwoman", universo: "DC"},
    {id: 20, nome: "Besouro Vermelho", universo: "DC"},
    {id: 21, nome: "Mulher-Gato", universo: "DC"},
    {id: 22, nome: "Rorschach", universo: "DC"},
    {id: 23, nome: "Espectro", universo: "DC"},
    {id: 24, nome: "Vingador Fantasma", universo: "DC"},
    {id: 25, nome: "Arlequina", universo: "DC"},
    {id: 26, nome: "Dr. Manhattan", universo: "DC"},
    {id: 27, nome: "Pantera Negra", universo: "Marvel"},
    {id: 28, nome: "Homem de Ferro", universo: "Marvel"},
    {id: 29, nome: "Capitão América", universo: "Marvel"},
    {id: 30, nome: "Thor", universo: "Marvel"},
    {id: 31, nome: "Hulk", universo: "Marvel"},
    {id: 32, nome: "Homem-Aranha", universo: "Marvel"},
    {id: 33, nome: "Wolverine", universo: "Marvel"},
    {id: 34, nome: "Doutor Estranho", universo: "Marvel"},
    {id: 35, nome: "Viúva Negra", universo: "Marvel"},
    {id: 36, nome: "Deadpool", universo: "Marvel"},
    {id: 37, nome: "Falcão", universo: "Marvel"},
    {id: 38, nome: "Feiticeira Escarlate", universo: "Marvel"},
    {id: 39, nome: "Gavião Arqueiro", universo: "Marvel"},
    {id: 40, nome: "Homem-Formiga", universo: "Marvel"},
    {id: 41, nome: "Visão", universo: "Marvel"},
    {id: 42, nome: "Punho de Ferro", universo: "Marvel"},
    {id: 43, nome: "Luke Cage", universo: "Marvel"},
    {id: 44, nome: "Jessica Jones", universo: "Marvel"},
    {id: 45, nome: "Mercúrio", universo: "Marvel"},
    {id: 46, nome: "Vespa", universo: "Marvel"},
    {id: 47, nome: "Máquina de Combate", universo: "Marvel"},
    {id: 48, nome: "Senhor Fantástico", universo: "Marvel"},
    {id: 49, nome: "Incrível Mulher-Hulk", universo: "Marvel"},
    {id: 50, nome: "Coisa", universo: "Marvel"},
    // Adicione mais heróis conforme necessário
  ];
  
  
  ;
}
