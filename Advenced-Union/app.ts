//discriminating union
class errorStatus{
    type?: 'error'; //discriminating union
    code?:number;
}


class successStatus{
    type?: 'success' //discriminating union
    code?:number;
    response?:string;
}


type Status = errorStatus | successStatus;


function  Get(status:Status){ //descriminatinf unions
    switch (status.type) {
        case "success":
                console.log(status.response);
            break;

        case "error":
                console.log(status.code);
            break;
    
        default:
            break;
    }
}


//Intersecction
interface ErrorHandling{
        success?:boolean;
        error?:string;
}

interface GameData{
    title:string;
}

interface ArtistData{
    name:string
}

type GameResponse = ErrorHandling & GameData;
type ArtisResponse = ArtistData & ErrorHandling;

const game:GameResponse = {
    title :  'Halo',
    success: true,
}

const artist:ArtisResponse = {
    name: 'MIchael Jackson',
    success: false,
    error: '404'
}

//cuidado con tipos de datos primitivos
type superString = string  | number;
type superNumber = number | boolean;
type superSuper = superString & superNumber; //intersecction


//Type GUards .- reconocimiento de tipos de datos(number, strings, etc), para realizar acciones

function add(a: superString, b:superString){
        if(typeof a === 'string' && typeof b === 'string'){
            return a.concat(b);
        }else if(typeof a === 'number'  && typeof b ===  'number'){
                return a+b;
        }
}

add(5,4)


//intanceOf
class VideoPlayer{
    play():void{
        console.log('Playing Video');        
    }
}

class ImagePlayer{
    play():void{
        console.log('Playing IMaGES');
    }

    draw():void{
        console.log('Drawing IMage');
    }
}


type player = VideoPlayer | ImagePlayer;

function usePlayer(player:player){
        player.play();
        //in
        if('draw' in player){
            player.draw()
        }
        //instanceof
        if(player instanceof ImagePlayer){
            player.draw();
        }

}


//type casting
                                //este es el type casting
const canvas = <HTMLCanvasElement> document.getElementById('mycanvas');

//const c1 = canvas.getContext('2d');
const c1 = (canvas as HTMLCanvasElement).getContext('2d');

const DoSomething = () => {
    const c1 = (canvas as HTMLCanvasElement).getContext('2d');
}


//index property or index signature

const weather = {
    weather : 'clear sky',
    city : 'cdmx',
    summary : 'The sky is clear'
}

type Weather = {[property: string] : string}

const weather2 : Weather  = {
        City : 'cdmx',
        weather : 'sunny',
        sumamry: 'chido',
        //temp: 23
}



//Function overload
//funciones de sobrecarga
    function add2 (x:string, y:string):string;
    function add2(x:number, y: number):number;
    function add2(x:any, y:any):any{
        return x +y;
    }


console.log(add('said','ma')); 