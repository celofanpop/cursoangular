import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/interfaces/tema';
import { TemarioService } from '../../services/temario.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  temas: Tema[];


  constructor(private temaService: TemarioService) { }

  ngOnInit(): void {
    this.temas = this.temaService.getTemario();
  }

}
