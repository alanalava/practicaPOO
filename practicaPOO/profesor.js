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
exports.Profesor = void 0;
var empleado_1 = require("./empleado");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho, departamento, numerodeestudiantes) {
        var _this = _super.call(this, nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho) || this;
        _this.departamento = departamento;
        _this.numerodeestudiantes = numerodeestudiantes;
        return _this;
    }
    Profesor.prototype.cambiarDepartamento = function (nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
        console.log("El profesor ".concat(this.nombre, " ").concat(this.apellido, " ha sido reasignado al departamento de ").concat(this.departamento, "."));
    };
    return Profesor;
}(empleado_1.Empleado));
exports.Profesor = Profesor;
