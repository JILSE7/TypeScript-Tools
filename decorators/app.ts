function simpleDecorator(constructor: Function){
    console.log('Decorador invocado');
}

//decoration factory
function decoratorFactory(name:string){
    return function(constructor:Function){
        console.log('Decorator funtion with value: ', name);
    }
}

//@simpleDecorator
@decoratorFactory('said')
class ClassWithSimpleDecorator{

}


function Template(template:string, elementId:string){

        return function(constructor: any){
            const element = document.getElementById(elementId);
            const p = new constructor();
            if(element){
                element.innerHTML = template;
                element.querySelector('h1')!.textContent= p.name
            }
        }
}

@Template('<h1>Me genere desde el decorador</h1>', 'test')
class ClassWithSimpleDecorator2{
            name:string = 'Said';
}


let intancia1 = new ClassWithSimpleDecorator();
let intancia2 = new ClassWithSimpleDecorator();

console.log('intancia 1', JSON.stringify(intancia1));
console.log('intancia 2', JSON.stringify(intancia2));

let intancia3 = new ClassWithSimpleDecorator2();


function List(listId: string){
    return function(constructor :any){
        const data = new constructor() as DataClass;
        const element = document.getElementById('myList');

        if(element){
            data.lenguages.forEach(lenguaje => {
                const listItem = document.createElement('li');
                const text = document.createTextNode(lenguaje);
                listItem.appendChild(text);
                element.appendChild(listItem);
            })
        }
    }
}

@List('myList')
class DataClass{
    lenguages:string[] = ['C#', 'Java', 'Python', 'Js']
}


let intancia4 = new DataClass();

//cambiando el constructor de una clase a traves de un decorador
type constructorMIxin = {new(...args:any[]): {name: string}}

function useSaludation(saludation: string){

    return function <T extends  constructorMIxin>(target:T){

        return class extends target{

            private message = 'Hello' + saludation + this.name; 

            sayHello(){
                console.log(this.message);
            }
        }
    }
}

@useSaludation('Buenos dias')
class Gretter{
    constructor(public name:string){

    }

    sayHello():void{
        console.log('Hello', this.name);
    }
}

const gtr = new Gretter('Said');    
gtr.sayHello();


//Method Decorator
function logTrade(target: Object, key:string | Symbol, descriptor: PropertyDescriptor){
    /* console.log(target);
    console.log(key);
    console.log(descriptor.value); */

    const originalCode = descriptor.value;
    descriptor.value = function(){
        console.log('Invoked ', key , 'providing ', arguments); // funcionalidad agregada al metodo
        return originalCode.apply(this, arguments); // no modifica la estructura original del metodo
    }
}

class Trade{
    @logTrade
    placeOrder(stockName:string, quantity: number, operation:string, trackerID: number){

    }
}




const trade1 = new Trade()
trade1.placeOrder('nike', 100, 'Sell', 123);

const trade2 = new Trade()
trade2.placeOrder('microsoft', 500, 'Buy', 512);    


//property decorators

function propertyDec(target: Object, propertyKey : string){
    console.log('target',target);
    console.log('target constructor ',target.constructor);
    console.log('class name ', target.constructor.name);
    console.log('property key', propertyKey);
}

class ClassWithPropertyDec{
    @propertyDec
    name?: string;
}

function parameterDec(target:Object, methodName:string, parameterIndex:number){
        console.log(target);
        console.log('methodName,', methodName);
        console.log('parameterIndex', parameterIndex);
}

class ClassWithParamDec{

    print(@parameterDec value:string){

    }
}


