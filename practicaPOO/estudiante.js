"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var persona_1 = require("./persona");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, apellido, identificacion, estadocivil, curso, matricula) {
        var _this = _super.call(this, nombre, apellido, identificacion, estadocivil) || this;
        _this.curso = curso;
        _this.matricula = matricula;
        return _this;
    }
    Estudiante.prototype.matricularEnCurso = function (nuevoCurso) {
        this.curso = nuevoCurso;
        console.log("El estudiante ".concat(this.nombre, " ").concat(this.apellido, " ha sido matriculado en el nuevo curso: ").concat(this.curso, "."));
    };
    return Estudiante;
}(persona_1.Persona));
exports.Estudiante = Estudiante;
