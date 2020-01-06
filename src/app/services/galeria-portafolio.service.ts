import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ImagenInterface } from '../interfaces/info-imagen.interface';


@Injectable({
  providedIn: 'root'
})
export class GaleriaPortafolioService {

	info: ImagenInterface = {};
	cargada = false;

  portafolio: any[] = [];

  constructor(  private http: HttpClient ) { 

  	this.cargarInfo();
    this.cargarPortafolio();

  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-imagenes.json')
      .subscribe( (resp: ImagenInterface) => {

        this.cargada = true;
        this.info = resp;
        //console.log(resp);
        });
  }

  private cargarPortafolio(){
    this.http.get('https://magnoservicios-5af7e.firebaseio.com/galeria.json')
      .subscribe( (resp: any[]) => {
        this.portafolio = resp;
        });
  }
}
