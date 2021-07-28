"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//interfaz como tipo de funcion
var suma;
suma = function (n1, n2) {
    return n1 + n2;
};
var FiguraBase = /** @class */ (function () {
    function FiguraBase() {
        this.colorFigura = '';
    }
    FiguraBase.prototype.ObtenerArea = function () {
        console.log('Obteniendo area');
    };
    return FiguraBase;
}());
//herendando e implementado una interfaz a la vez, la regla es que primero va al herencia y despues la interfaz
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = 'rojo';
        return _this;
    }
    Circulo.prototype.CalcularArea = function () {
        console.log('calculando area');
        console.log(this.color);
        return 0;
    };
    Circulo.prototype.Dibujar = function () {
        console.log('dibujando circulo');
    };
    return Circulo;
}(FiguraBase));
var Linea = /** @class */ (function () {
    function Linea(shapeName) {
        this.color = 'naranja';
        if (shapeName) {
            this.shapeName = 'May name is ' + shapeName;
        }
        else {
            this.shapeName = 'Untitled';
        }
    }
    Linea.prototype.CalcularArea = function () {
        console.log('calculando area');
        console.log(this.color);
        return 0;
    };
    Linea.prototype.Dibujar = function () {
        console.log('dibujando Linea');
    };
    return Linea;
}());
var c = new Circulo();
var l = new Linea();
var polimorfismo = c; //polimorfismo, va tomando forma a lo que lo estemos cambiando
polimorfismo = l;
var CalcularArea = function (figura) {
    if (figura instanceof Circulo) {
        figura.Dibujar();
        figura.CalcularArea();
    }
    else if (figura instanceof Linea) {
        figura.Dibujar();
        figura.CalcularArea();
    }
};
CalcularArea(c);
CalcularArea(l);
//abstract
//const figuraB: FiguraBase = new FiguraBase();  //No se puede crear una instancia de una clase abstracta
/* c.Dibujar();
l.Dibujar(); */ 
