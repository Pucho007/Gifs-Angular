import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styles: [
  ]
})
export class SidebardComponent {

  constructor( private gifsService: GifsService){

  }


  get historial(){
    return this.gifsService.historial;
  }

  buscar(termino: string){
    this.gifsService.insertar(termino);
  }


}
