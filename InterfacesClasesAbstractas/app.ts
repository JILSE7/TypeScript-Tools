
//type fn = (n1:number, n2:number)     => number;
interface fn {
    (n1:number, n2: number) : number;
}

//interfaz como tipo de funcion
let suma:fn;

suma = (n1:number, n2:number)=> {
    return n1 + n2;
}



interface Figura extends Calculador{
    readonly color:string;
    shapeName?:string; //propiedad opcional
    Dibujar():void;
    Render?():void;
}

interface Calculador{
    CalcularArea():number;
}


abstract class FiguraBase {
    
    protected colorFigura: string = '';

    ObtenerArea():void{
        console.log('Obteniendo area');
    }
}
//herendando e implementado una interfaz a la vez, la regla es que primero va al herencia y despues la interfaz
class Circulo extends FiguraBase implements Figura{
    color: string = 'rojo';
    CalcularArea(): number {
        console.log('calculando area');
        console.log(this.color);
        return 0
    }

    
    Dibujar():void{
        console.log('dibujando circulo');
        
    }
}

class Linea implements Figura{
    color: string = 'naranja';
    shapeName?:string;

    constructor(shapeName?:number){
        if(shapeName){

            this.shapeName =  'May name is ' + shapeName
        }else{
            this.shapeName =  'Untitled'
        }
    }

    CalcularArea(): number {
        console.log('calculando area');
        console.log(this.color);
        return 0
    }

    Dibujar():void{
        console.log('dibujando Linea');
    }
}



const c :Figura = new Circulo();
const l:Figura = new Linea();

let polimorfismo = c; //polimorfismo, va tomando forma a lo que lo estemos cambiando
polimorfismo = l;


const CalcularArea = (figura:Figura) => {
    if(figura instanceof Circulo){
        figura.Dibujar();
        figura.CalcularArea();
    }else if(figura instanceof Linea){
        figura.Dibujar();
        figura.CalcularArea();
    }
}

CalcularArea(c);
CalcularArea(l);

//abstract
//const figuraB: FiguraBase = new FiguraBase();  //No se puede crear una instancia de una clase abstracta


/* c.Dibujar();
l.Dibujar(); */