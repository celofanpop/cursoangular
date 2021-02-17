import { Injectable } from '@angular/core';
import { TEMARIO } from '../data/datostemario';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  constructor() {
    console.log('Entrando en Temario Service');
  }

  getTemario(){
    console.log('Dentro de getTemario');
    return TEMARIO;
  }

}

