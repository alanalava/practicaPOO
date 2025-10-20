// 1. IMPORTACIONES
// Asegúrate de que tus archivos de clase (Persona, Empleado, etc.) tengan la extensión .js
import { Persona } from "./persona.ts";
import { Empleado } from "./empleado.ts";
import { Estudiante } from "./estudiante.ts";
import { Profesor } from "./profesor.ts";
import { PersonalDeServicio } from "./personaldeservicio.ts";

// ----------------------------------------------------------------------

// 2. CREACIÓN DE OBJETOS
console.log("=========================================");
console.log("         INICIANDO INSTANCIACIÓN         ");
console.log("=========================================");

const persona = new Persona('María', 'López', '0123', 'Soltera');
const empleado = new Empleado('Carlos', 'Díaz', '0456', 'Casado', '2010', 101);
const estudiante = new Estudiante('Laura', 'Pérez', '0789', 'Soltera', 'Ingeniería', 'A100');
const profesor = new Profesor('Ricardo', 'Ruiz', '1011', 'Divorciado', '2005', 205, 'Informática', 35);
const servicio = new PersonalDeServicio('Elena', 'Vargas', '1213', 'Casada', '2018', 301, 'Biblioteca');

console.log("\n--- ESTADO INICIAL DE LA PERSONA ---\n", persona);

// ----------------------------------------------------------------------

// 3. LLAMADA A MÉTODOS Y SALIDA POR CONSOLA

console.log("\n=========================================");
console.log("         EJECUTANDO ACCIONES             ");
console.log("=========================================\n");

// 1. Método de Persona
persona.cambiarEstadoCivil('Casada');

// 2. Método de Empleado
empleado.reasignarDespacho(202);

// 3. Método de Estudiante
estudiante.matricularEnCurso('Matemáticas');

// 4. Método de Profesor
profesor.cambiarDepartamento('Matemáticas');

// 5. Método de PersonalDeServicio
servicio.trasladarSeccion('Laboratorio');

// ----------------------------------------------------------------------

// 4. MOSTRAR ESTADO FINAL DE LOS OBJETOS

console.log("\n=========================================");
console.log("         ESTADO FINAL DE OBJETOS         ");
console.log("=========================================");

// Muestra el objeto completo en consola para ver los cambios
console.log("\n1. Persona (Estado Civil Cambiado):");
console.log(persona);

console.log("\n2. Empleado (Despacho Reasignado):");
console.log(empleado);

console.log("\n3. Estudiante (Curso Matriculado):");
console.log(estudiante);

console.log("\n4. Profesor (Departamento Cambiado):");
console.log(profesor);

console.log("\n5. Personal de Servicio (Sección Trasladada):");
console.log(servicio);

console.log("\n=========================================");