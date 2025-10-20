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
exports.Empleado = void 0;
var persona_1 = require("./persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho) {
        var _this = _super.call(this, nombre, apellido, identificacion, estadocivil) || this;
        _this.anioIncorporacion = anioIncorporacion;
        _this.numeroDespacho = numeroDespacho;
        return _this;
    }
    Empleado.prototype.reasignarDespacho = function (nuevoDespacho) {
        this.numeroDespacho = nuevoDespacho;
        console.log("El empleado ".concat(this.nombre, " ").concat(this.apellido, " ha sido reasignado al despacho n\u00FAmero ").concat(this.numeroDespacho, "."));
    };
    return Empleado;
}(persona_1.Persona));
exports.Empleado = Empleado;
