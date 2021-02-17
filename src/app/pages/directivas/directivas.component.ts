import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  titulo: string = 'Centro educativo';
  colegio: string = 'Colegio Infantes';
  mostrar: boolean = true;
  colegios: string[] = ['Nara', ' Infantes', 'Mayol', 'Sefarad'];


  constructor() { }

  ngOnInit(): void {
  }

  mostrarOcultar(): void{
    this.mostrar = !this.mostrar;
  }

}
