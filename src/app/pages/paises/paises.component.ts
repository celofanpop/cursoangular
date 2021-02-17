import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
      this.paisesService.getPaises().subscribe((respuesta: any) => {
        this.paises = respuesta;
      });
  }

}
