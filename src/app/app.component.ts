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
  personas: Persona[] = [];

  constructor(private personasService: PersonasService){}
  
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregarPersonaText(){
    this.mensaje = 'Persona agregada';
    this.mostrar = true;
    this.deshabilitar = true;
  }

  personaAgregada(persona: Persona){
    this.personasService.agregarPersona(persona);
  }

  emitirSaludo(indice: number){
    this.personasService.saludar.emit(indice);
  }
}
