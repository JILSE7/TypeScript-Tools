"use strict";
class MultimediaFile {
    constructor(nombre, fechaCreacion, fechaModificacion, tipoElemento) {
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.tipoElemento = tipoElemento;
    }
    desplegarInformacion() {
        const informacion = `${this.nombre} ${this.tipoElemento} ${this.fechaModificacion} ${this.fechaCreacion}`;
        console.log(informacion);
    }
}
class dinamyFile extends MultimediaFile {
    //duration:string = '';
    constructor(nombre, fechaCreacion, fechaModificacion, tipoElemento, duration) {
        super(nombre, fechaCreacion, fechaModificacion, tipoElemento);
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.tipoElemento = tipoElemento;
        this.duration = duration;
    }
    detener() {
        console.log('Deteniendo...!');
    }
    pausar() {
        console.log('pausandoooo...!');
    }
    reproducir() {
        console.log();
    }
}
class staticFile extends MultimediaFile {
    constructor(nombre, fechaCreacion, fechaModificacion, tipoElemento) {
        super(nombre, fechaCreacion, fechaModificacion, tipoElemento);
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.tipoElemento = tipoElemento;
    }
    Editar() {
        console.log('Editandoooo!....');
    }
}
const mfile = new MultimediaFile('prueba.txt', '12/12/12', '13/13/13', 'Archivo de texto');
/* mfile.nombre='prueba.txt';
mfile.fechaCreacion='12/12/12';
mfile.fechaModificacion= '13/13/13';
mfile.tipoElemento= 'Archivo de texto'; */
mfile.desplegarInformacion();
const dFile = new dinamyFile('dinamic', '14/14/12', '12/10/12', '.mp3', '5s');
const sFile = new staticFile('static', '12/1/12', '13/1/13', 'static');
sFile.Editar();
