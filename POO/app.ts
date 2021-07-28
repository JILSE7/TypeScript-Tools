
class Rectangulo {
        /* baseRectangulo : number = 2;
        alturaRectangulo : number = 3;
        private color: string = 'Rojo'; */

        constructor(public baseRectangulo : number, public alturaRectangulo:number, public color:string){

        }

        getArea() : number{
                const result = this.baseRectangulo * this.alturaRectangulo;
                this.color = 'Blanco'
                this.printResult(result);
            return result
        }

        getPerimetro() : number{
            return ((2*this.baseRectangulo) + (2 *this.alturaRectangulo));
        }

       private printResult(result: number): void {
            console.log(result);
        }

        static calcularPerimetro(baseRectangulo:number, alturaRectangulo:number){
            return (baseRectangulo* 2) + (alturaRectangulo * 2)
        }
}

class Circulo{
    static numberCicle:number = 0;
    static readonly PI:number = 3.1416; //statica de solo lectura
    constructor(private radio : number){

        Circulo.numberCicle++;
    }


    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }


}

const newRect: Rectangulo = new Rectangulo(5,3,'red');
console.log(newRect);

const perimetro = Rectangulo.calcularPerimetro(2,2);
console.log(perimetro);
//newRect.printResult() //metodo privado, conveniente cuando el metodo trabaja internamente

const circulo1 :Circulo = new Circulo(5);
const circulo2 :Circulo = new Circulo(10);
const circulo3 :Circulo = new Circulo(15);

console.log(Circulo.numberCicle, Circulo.PI)
