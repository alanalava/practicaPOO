import { Empleado } from "./empleado";

export class PersonalDeServicio extends Empleado {
    public seccion: string;

    constructor(nombre: string, apellido: string, identificacion: string, estadocivil: string, anioIncorporacion: string, numeroDespacho: number, seccion: string) {
        super(nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho);
        this.seccion = seccion;
    }
    
    public trasladarSeccion(nuevaSeccion: string): void {
        this.seccion = nuevaSeccion;
        
        
        console.log(`El empleado de servicio ${this.nombre} ${this.apellido} ha sido trasladado a la sección: ${this.seccion}.`);
    }
}