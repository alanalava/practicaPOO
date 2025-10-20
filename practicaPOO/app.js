"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. IMPORTACIONES
// Asegúrate de que tus archivos de clase (Persona, Empleado, etc.) tengan la extensión .js
var persona_js_1 = require("./persona.js");
var empleado_js_1 = require("./empleado.js");
var estudiante_js_1 = require("./estudiante.js");
var profesor_js_1 = require("./profesor.js");
var personaldeservicio_js_1 = require("./personaldeservicio.js");
// ----------------------------------------------------------------------
// 2. CREACIÓN DE OBJETOS
console.log("=========================================");
console.log("         INICIANDO INSTANCIACIÓN         ");
console.log("=========================================");
var persona = new persona_js_1.Persona('María', 'López', '0123', 'Soltera');
var empleado = new empleado_js_1.Empleado('Carlos', 'Díaz', '0456', 'Casado', '2010', 101);
var estudiante = new estudiante_js_1.Estudiante('Laura', 'Pérez', '0789', 'Soltera', 'Ingeniería', 'A100');
var profesor = new profesor_js_1.Profesor('Ricardo', 'Ruiz', '1011', 'Divorciado', '2005', 205, 'Informática', 35);
var servicio = new personaldeservicio_js_1.PersonalDeServicio('Elena', 'Vargas', '1213', 'Casada', '2018', 301, 'Biblioteca');
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
