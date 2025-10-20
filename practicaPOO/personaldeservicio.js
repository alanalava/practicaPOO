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
exports.PersonalDeServicio = void 0;
var empleado_1 = require("./empleado");
var PersonalDeServicio = /** @class */ (function (_super) {
    __extends(PersonalDeServicio, _super);
    function PersonalDeServicio(nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho, seccion) {
        var _this = _super.call(this, nombre, apellido, identificacion, estadocivil, anioIncorporacion, numeroDespacho) || this;
        _this.seccion = seccion;
        return _this;
    }
    PersonalDeServicio.prototype.trasladarSeccion = function (nuevaSeccion) {
        this.seccion = nuevaSeccion;
        console.log("El empleado de servicio ".concat(this.nombre, " ").concat(this.apellido, " ha sido trasladado a la secci\u00F3n: ").concat(this.seccion, "."));
    };
    return PersonalDeServicio;
}(empleado_1.Empleado));
exports.PersonalDeServicio = PersonalDeServicio;
