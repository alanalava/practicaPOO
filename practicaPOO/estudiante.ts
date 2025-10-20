import { Persona } from "./persona";

export class Estudiante extends Persona {

    public curso: string;
    public matricula: string;
    
    constructor(nombre: string, apellido: string, identificacion: string, estadocivil: string, curso: string, matricula: string) {
        super(nombre, apellido, identificacion, estadocivil);
        this.curso = curso;
        this.matricula = matricula;
    }    

    public matricularEnCurso(nuevoCurso: string): void {
        this.curso = nuevoCurso;
        
        console.log(`El estudiante ${this.nombre} ${this.apellido} ha sido matriculado en el nuevo curso: ${this.curso}.`);
    }
}