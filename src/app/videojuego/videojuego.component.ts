import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo:string;
  public listado:string;
  constructor(){
    this.titulo = 'Componente de videojuegos!';
    this.listado = 'Listado de juegos populares';
    console.log('Se ha cargado el componenete');

  }

  ngOnInit(){
    console.log('Init iniciado');
  }

  ngDoCheck(){
    console.log('Do check iniciado');
  }

  ngOnDestroy(){
    console.log('On Destroy ejecutado');

  }
  cambiarTitulo(){
      this.titulo = 'Nuevo titulo del componenete';
  }

}
