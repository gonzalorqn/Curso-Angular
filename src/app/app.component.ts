import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deshabilitar = false;
  mensaje = '';
  titulo = 'hola';
  mostrar = false;

  constructor(){}
  
  ngOnInit(): void {}

  agregarPersonaText(){
    this.mensaje = 'Persona agregada';
    this.mostrar = true;
    this.deshabilitar = true;
  }
}
