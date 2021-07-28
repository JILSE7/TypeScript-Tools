const hexValues: string[] = ['0', '1', '2', '3' ,'4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn')!; // con el ! decimos que estamos seguros que encontraremos el elemento y se nos corrigue el error
const color = document.querySelector('.color')!;  // error si no le pones el signo : OBject is possibly null : el objeto es posiblemente nulo

//sin callback
/* btn.addEventListener('click', () => {
    let hexColor: string = '#';

    for(let i = 0 ; i< 6; i++){
        hexColor += hexValues[getColorRandom()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}) */


//con callback
btn.addEventListener('click', () => {
    generateColor((hexColor) => {
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    })
});


const getColorRandom = () => (Math.floor(Math.random()* hexValues.length))

//callback
function generateColor(update : (color : string) => void){

    let hexColor: string = '#';

    for(let i = 0 ; i< 6; i++){
        hexColor += hexValues[getColorRandom()];
    }

    update(hexColor);

}