class MultimediaFile{
    

    constructor(public nombre:string, public fechaCreacion : string, public fechaModificacion:string, public tipoElemento:string ){

    }

    desplegarInformacion():void{
        const informacion:string = `${this.nombre} ${this.tipoElemento} ${this.fechaModificacion} ${this.fechaCreacion}`
            console.log(informacion);
    }
}

class dinamyFile extends MultimediaFile{
            //duration:string = '';



            constructor(public nombre:string, public fechaCreacion : string, public fechaModificacion:string, public tipoElemento:string, public duration:string){
                super(nombre, fechaCreacion, fechaModificacion, tipoElemento);
            }

            detener():void{
                console.log('Deteniendo...!');
            }

            pausar():void{
                console.log('pausandoooo...!');
            }

            reproducir():void{
                console.log();
            }
}

class staticFile extends MultimediaFile{
    constructor(public nombre:string, public fechaCreacion : string, public fechaModificacion:string, public tipoElemento:string){
        super(nombre, fechaCreacion, fechaModificacion, tipoElemento);
    }
    Editar():void{
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
