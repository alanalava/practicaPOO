import { Empleado } from "./empleado";

export class Profesor extends Empleado {
    public departamento: string;
    public numerodeestudiantes: number;

    constructor(nombre: string, apellido: string, identificacion: string, estadocivil: string, anioIncorporacion: string, numeroDespacho: number, departamento: string, numerodeestudiantes: number) {
        super(nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho);
        this.departamento = departamento;
        this.numerodeestudiantes = numerodeestudiantes;
    }    
    
    public cambiarDepartamento(nuevoDepartamento: string): void {
        this.departamento = nuevoDepartamento;
        console.log(`El profesor ${this.nombre} ${this.apellido} ha sido reasignado al departamento de ${this.departamento}.`);
    }
}