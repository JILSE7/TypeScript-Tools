"use strict";
class Rectangulo {
    /* baseRectangulo : number = 2;
    alturaRectangulo : number = 3;
    private color: string = 'Rojo'; */
    constructor(baseRectangulo, alturaRectangulo, color) {
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
        this.color = color;
    }
    getArea() {
        const result = this.baseRectangulo * this.alturaRectangulo;
        this.color = 'Blanco';
        this.printResult(result);
        return result;
    }
    getPerimetro() {
        return ((2 * this.baseRectangulo) + (2 * this.alturaRectangulo));
    }
    printResult(result) {
        console.log(result);
    }
    static calcularPerimetro(baseRectangulo, alturaRectangulo) {
        return (baseRectangulo * 2) + (alturaRectangulo * 2);
    }
}
class Circulo {
    constructor(radio) {
        this.radio = radio;
        Circulo.numberCicle++;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}
Circulo.numberCicle = 0;
Circulo.PI = 3.1416; //statica de solo lectura
const newRect = new Rectangulo(5, 3, 'red');
console.log(newRect);
const perimetro = Rectangulo.calcularPerimetro(2, 2);
console.log(perimetro);
//newRect.printResult() //metodo privado, conveniente cuando el metodo trabaja internamente
const circulo1 = new Circulo(5);
const circulo2 = new Circulo(10);
const circulo3 = new Circulo(15);
console.log(Circulo.numberCicle, Circulo.PI);
