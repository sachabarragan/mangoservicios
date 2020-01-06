import { Component, OnInit } from '@angular/core';
import { GaleriaPortafolioService } from '../../services/galeria-portafolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( public _imgService: GaleriaPortafolioService) { }

  ngOnInit() {
  }

}
