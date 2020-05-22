import { Component, OnInit } from '@angular/core';
//import { Configuracion } from './models/configuracion';
import { Generico } from './models/generico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'DemoAngular';
  public mostrar:boolean = true;
  public generico:Array<Generico>;
  public nombres: String[];
  public mi_nombre:string = "";

  constructor(){
      this.nombres = new Array;
      this.generico = [
        new Generico('Andre', '2309', 'Manzana C', 30228751),
        new Generico('Mario', '0314', 'Zona 1', 30228751),
        new Generico('Carlos', '0314', 'Zona 1', 30228751),
        new Generico('Jorge', '0314', 'Zona 1', 30228751),
        new Generico('Jorge', '092', 'Zona 2', 30228751)
      ];
  }

  ngOnInit(){
    console.log(this.generico);
    this.getNombres(); //Tiene que ser THIS y el nombre del metodo
  }

  ocultarVideoJuegos(value){
    this.mostrar = value;
  }

  getNuevos(){
    alert(this.mi_nombre);
  }

  getNombres(){
    this.generico.forEach((value, index) => {
      if(this.nombres.indexOf(value.name) < 0){
        this.nombres.push(value.name);
      }
    });
  }
}
