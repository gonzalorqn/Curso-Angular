import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  
    nombreInput: string = '';
    apellidoInput: string = '';
    index: number = -1;
    modoEdicion: number = 0;

  constructor(private personasService: PersonasService, private router: Router, private route: ActivatedRoute){
    this.personasService.saludar.subscribe(
      (index: number) => alert("El indice es: " + index)
    );
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion === 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1);
    }
    else{
      this.personasService.agregarPersona(persona1);
    }
    //this.personaCreada.emit(persona1);
    //this.personas.push(persona1);
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.modoEdicion === 1){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
