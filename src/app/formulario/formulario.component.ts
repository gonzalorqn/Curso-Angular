import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  constructor(private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (index: number) => alert("El indice es: " + index)
    );
  }

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);
    //this.personas.push(persona1);
  }
}
