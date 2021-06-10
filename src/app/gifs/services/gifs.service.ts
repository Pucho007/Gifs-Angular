import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIF, Gifs } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private serviceUrl='https://api.giphy.com/v1/gifs';
  private _historial: string[]=[];
  public gifs: Gifs[]=[];


  get historial():string[]{
    return [...this._historial];
  }

  constructor(private http:HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.gifs=JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  insertar(busqueda:string){
    //borramos espacios en la busqueda
    busqueda=busqueda.trim().toLocaleLowerCase();
    //no ingresa busqeudas vacias
    if(busqueda.length===0){
      return;
    }
    //evitamos las busquedas repititivas
    if(!this._historial.includes(busqueda)){
      this._historial.unshift(busqueda);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    console.log(this._historial);

    const params=new HttpParams()
            .set('api_key', 'ckEKu3SwIE359GgwveIeTff6NPLzzQiU')
            .set('q', busqueda)
            .set('limit', '10')


    this.http.get<GIF>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp=>{
        console.log(resp.data);
        this.gifs=resp.data;
        localStorage.setItem('resultado',JSON.stringify(this.gifs));
      })
  }



}
