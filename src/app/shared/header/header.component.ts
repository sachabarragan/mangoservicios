import { Component, OnInit } from '@angular/core';

import { GaleriaPortafolioService } from '../../services/galeria-portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoGaleria: GaleriaPortafolioService ) { }

  ngOnInit() {
  }

}
