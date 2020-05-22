import {Component} from '@angular/core';

@Component({
  selector:'zapatillas',
  templateUrl: './zapatillas.componenet.html'
})

export class ZapatillasComponent{
  public titulo;

  constructor(){
    this.titulo = 'Componente de Zapatillas'
  }
}
