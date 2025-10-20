export class Persona {

    public nombre: string;
    public apellido: string;
    public identificacion: string;
    public estadocivil: string;

    constructor(nombre: string, apellido: string, identificacion: string, estadocivil: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.estadocivil = estadocivil;
    }
 
    public cambiarEstadoCivil(nuevoEstadoCivil: string): void {
        this.estadocivil = nuevoEstadoCivil;
        console.log(`El estado civil de ${this.nombre} ${this.apellido} ha sido cambiado a: ${this.estadocivil}`);
    }
}