"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function simpleDecorator(constructor) {
    console.log('Decorador invocado');
}
//decoration factory
function decoratorFactory(name) {
    return function (constructor) {
        console.log('Decorator funtion with value: ', name);
    };
}
//@simpleDecorator
let ClassWithSimpleDecorator = class ClassWithSimpleDecorator {
};
ClassWithSimpleDecorator = __decorate([
    decoratorFactory('said')
], ClassWithSimpleDecorator);
function Template(template, elementId) {
    return function (constructor) {
        const element = document.getElementById(elementId);
        const p = new constructor();
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1').textContent = p.name;
        }
    };
}
let ClassWithSimpleDecorator2 = class ClassWithSimpleDecorator2 {
    constructor() {
        this.name = 'Said';
    }
};
ClassWithSimpleDecorator2 = __decorate([
    Template('<h1>Me genere desde el decorador</h1>', 'test')
], ClassWithSimpleDecorator2);
let intancia1 = new ClassWithSimpleDecorator();
let intancia2 = new ClassWithSimpleDecorator();
console.log('intancia 1', JSON.stringify(intancia1));
console.log('intancia 2', JSON.stringify(intancia2));
let intancia3 = new ClassWithSimpleDecorator2();
function List(listId) {
    return function (constructor) {
        const data = new constructor();
        const element = document.getElementById('myList');
        if (element) {
            data.lenguages.forEach(lenguaje => {
                const listItem = document.createElement('li');
                const text = document.createTextNode(lenguaje);
                listItem.appendChild(text);
                element.appendChild(listItem);
            });
        }
    };
}
let DataClass = class DataClass {
    constructor() {
        this.lenguages = ['C#', 'Java', 'Python', 'Js'];
    }
};
DataClass = __decorate([
    List('myList')
], DataClass);
let intancia4 = new DataClass();
function useSaludation(saludation) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.message = 'Hello' + saludation + this.name;
            }
            sayHello() {
                console.log(this.message);
            }
        };
    };
}
let Gretter = class Gretter {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('Hello', this.name);
    }
};
Gretter = __decorate([
    useSaludation('Buenos dias')
], Gretter);
const gtr = new Gretter('Said');
gtr.sayHello();
//Method Decorator
function logTrade(target, key, descriptor) {
    /* console.log(target);
    console.log(key);
    console.log(descriptor.value); */
    const originalCode = descriptor.value;
    descriptor.value = function () {
        console.log('Invoked ', key, 'providing ', arguments); // funcionalidad agregada al metodo
        return originalCode.apply(this, arguments); // no modifica la estructura original del metodo
    };
}
class Trade {
    placeOrder(stockName, quantity, operation, trackerID) {
    }
}
__decorate([
    logTrade
], Trade.prototype, "placeOrder", null);
const trade1 = new Trade();
trade1.placeOrder('nike', 100, 'Sell', 123);
const trade2 = new Trade();
trade2.placeOrder('microsoft', 500, 'Buy', 512);
//property decorators
function propertyDec(target, propertyKey) {
    console.log('target', target);
    console.log('target constructor ', target.constructor);
    console.log('class name ', target.constructor.name);
    console.log('property key', propertyKey);
}
class ClassWithPropertyDec {
}
__decorate([
    propertyDec
], ClassWithPropertyDec.prototype, "name", void 0);
function parameterDec(target, methodName, parameterIndex) {
    console.log(target);
    console.log('methodName,', methodName);
    console.log('parameterIndex', parameterIndex);
}
class ClassWithParamDec {
    print(value) {
    }
}
__decorate([
    __param(0, parameterDec)
], ClassWithParamDec.prototype, "print", null);
