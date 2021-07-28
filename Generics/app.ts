class Stack<T>{
    tamanioDefault: number = 100;
    arreglo: T[];
    indiceActual: number = 0;
    numElementos:number = 0;

    constructor(_tamanio?:number){
        if(_tamanio){

            if(_tamanio > 0 ){
                this.arreglo = new Array(_tamanio);

            }else{
                throw new Error('Bad Size');
            }


        }else{
            this.arreglo = new Array(this.tamanioDefault);
        }
    }


    apliar(element: T){
        if(this.numElementos === this.arreglo.length){
                throw Error('Array is  Full');
        }else{
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    }


    desapilar():T{
        if(this.numElementos == 0){
            throw Error(' Array is Empty');
        }else{
            this.indiceActual--;
            const elemento:T = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento;
        }
    }
}

class ClassGeneric <T, U>{

    dato?: T ;
    dato2?:boolean;

    constructor(_dato:T){
        this.dato = _dato;
    }

    DoSomethind(parameter: T):T{
            const dato:T = parameter;
            return dato;
    }
};

interface ConectionBase<T>{
    connectionString:String;

}


class sql implements ConectionBase<string>{
    connectionString: String = 'abc';

}


/* const generic:ClassGeneric<number> = new ClassGeneric(25);
console.log(generic.DoSomethind(75));
const generic2:ClassGeneric<string>  = new ClassGeneric('said');
console.log(generic2.DoSomethind('said')); */

const pila :Stack<number> = new Stack();
const pila2:Stack<string> = new Stack(20);

console.log(pila.arreglo.length);
console.log(pila2.arreglo.length);


pila.apliar(25),
pila.apliar(26);
pila.apliar(87);

pila2.apliar('said'),
pila2.apliar('memo');
pila2.apliar('caro');

const elemento:number = pila.desapilar();
console.log(elemento);

const elemento2:string = pila2.desapilar();
console.log(elemento2);


//generics function
const printT = <T>(enty:T):void  => {
    console.log('especial report');
    console.log(enty);
}

printT('SAID');
printT(25);


//KEYoF
interface IPerson {
    id:number;  
    name: string;
    surname: string,
    age:number;
}

type PersonPropertyLiteral  = 'id' | 'name' |  'surname';

const getKeyusingStringLiteral = (pp1: PersonPropertyLiteral, value:IPerson) => {
    console.log(pp1 + ' ' + value[pp1]);
}





let testPerson:IPerson = {id: 1, name: 'said', surname:'hfdhdf', age:24} 

const getKeyUsingKeyOf = (key: keyof IPerson, value:IPerson) => {
    console.log(key + ' ' + value[key]);
}
getKeyusingStringLiteral('id', testPerson)
getKeyUsingKeyOf('age', testPerson)