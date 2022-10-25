import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez"), new Persona("Matias", "Rodriguez")];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.personas.push(persona);
        this.loggingService.enviarMensajeAConsola("Persona agregada con exito.");
    }
}