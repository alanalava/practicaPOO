"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, identificacion, estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.estadocivil = estadocivil;
    }
    Persona.prototype.cambiarEstadoCivil = function (nuevoEstadoCivil) {
        this.estadocivil = nuevoEstadoCivil;
        console.log("El estado civil de ".concat(this.nombre, " ").concat(this.apellido, " ha sido cambiado a: ").concat(this.estadocivil));
    };
    return Persona;
}());
exports.Persona = Persona;
