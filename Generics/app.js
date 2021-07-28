"use strict";
var Stack = /** @class */ (function () {
    function Stack(_tamanio) {
        this.tamanioDefault = 100;
        this.indiceActual = 0;
        this.numElementos = 0;
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arreglo = new Array(_tamanio);
            }
            else {
                throw new Error('Bad Size');
            }
        }
        else {
            this.arreglo = new Array(this.tamanioDefault);
        }
    }
    Stack.prototype.apliar = function (element) {
        if (this.numElementos === this.arreglo.length) {
            throw Error('Array is  Full');
        }
        else {
            this.arreglo[this.indiceActual] = element;
            this.indiceActual++;
            this.numElementos++;
        }
    };
    Stack.prototype.desapilar = function () {
        if (this.numElementos == 0) {
            throw Error(' Array is Empty');
        }
        else {
            this.indiceActual--;
            var elemento_1 = this.arreglo[this.indiceActual];
            this.numElementos--;
            return elemento_1;
        }
    };
    return Stack;
}());
var ClassGeneric = /** @class */ (function () {
    function ClassGeneric(_dato) {
        this.dato = _dato;
    }
    ClassGeneric.prototype.DoSomethind = function (parameter) {
        var dato = parameter;
        return dato;
    };
    return ClassGeneric;
}());
;
var sql = /** @class */ (function () {
    function sql() {
        this.connectionString = 'abc';
    }
    return sql;
}());
/* const generic:ClassGeneric<number> = new ClassGeneric(25);
console.log(generic.DoSomethind(75));
const generic2:ClassGeneric<string>  = new ClassGeneric('said');
console.log(generic2.DoSomethind('said')); */
var pila = new Stack();
var pila2 = new Stack(20);
console.log(pila.arreglo.length);
console.log(pila2.arreglo.length);
pila.apliar(25),
    pila.apliar(26);
pila.apliar(87);
pila2.apliar('said'),
    pila2.apliar('memo');
pila2.apliar('caro');
var elemento = pila.desapilar();
console.log(elemento);
var elemento2 = pila2.desapilar();
console.log(elemento2);
//generics function
var printT = function (enty) {
    console.log('especial report');
    console.log(enty);
};
printT('SAID');
printT(25);
var getKeyusingStringLiteral = function (pp1, value) {
    console.log(pp1 + ' ' + value[pp1]);
};
var testPerson = { id: 1, name: 'said', surname: 'hfdhdf', age: 24 };
var getKeyUsingKeyOf = function (key, value) {
    console.log(key + ' ' + value[key]);
};
getKeyusingStringLiteral('id', testPerson);
getKeyUsingKeyOf('age', testPerson);
