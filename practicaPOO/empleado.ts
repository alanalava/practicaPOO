import {Persona} from "./persona";

export class Empleado extends Persona {

    public anioIncorporacion: string;
    public numeroDespacho: number;

    constructor(nombre:string, apellido:string, identificacion:string, estadocivil:string, anioIncorporacion:string, numeroDespacho:number){
        super (nombre, apellido, identificacion, estadocivil);
        this.anioIncorporacion = anioIncorporacion;
        this.numeroDespacho = numeroDespacho;
    }


    public reasignarDespacho(nuevoDespacho: number): void {
        this.numeroDespacho = nuevoDespacho;
        console.log(`El empleado ${this.nombre} ${this.apellido} ha sido reasignado al despacho número ${this.numeroDespacho}.`);
    }
}