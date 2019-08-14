import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter3';
  nome: string;
  idade: number;
  data: Date;

  constructor() {
    this.nome = 'Tullio';
    this.idade = 20;
    console.log(`O sistema esta sendo executado por ${this.nome} com idade ${this.idade.toString()}`);
  }

  getNome() {
    return this.nome;
  }

}
