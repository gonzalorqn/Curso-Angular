import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  private edad: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number{
    return this.edad;
  }

}
