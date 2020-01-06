import { Component } from '@angular/core';
import { GaleriaPortafolioService } from './services/galeria-portafolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public _infoGalriaPortafolio: GaleriaPortafolioService ){

  }

}
