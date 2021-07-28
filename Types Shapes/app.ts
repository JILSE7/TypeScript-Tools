class Shape{
    constructor(public ctx:CanvasRenderingContext2D, public originX: number, public originY: number){

    }
}


class Line extends Shape {

    constructor( ctx:CanvasRenderingContext2D,  originX: number,  originY: number,  public  x:number, public y:number){
        super(ctx,originX, originY);
    }

    drawLine():void{
        
        this.ctx.moveTo(this.originX,this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();

    }    
}    



class Circle extends Shape{
    constructor( ctx:CanvasRenderingContext2D,  originX: number,  originY: number,  public  radius:number){
        super(ctx,originX, originY);
    }

    drawCircle():void{
            ctx.beginPath();
            ctx.arc(this.originX, this.originY, this.radius,0,2 * Math.PI);
            ctx.stroke();
    }
}

class TextShape extends Shape{
    constructor( ctx:CanvasRenderingContext2D,  originX: number,  originY: number,  public  text:string){
        super(ctx,originX, originY);
    }   

    drawText():void{
        this.ctx.font = '30px Arial';
        this.ctx.fillText(this.text, this.originX, this.originY);
    }
}
class MathHelper{
    static generateRandom ():number{
        return  Math.floor( Math.random() * 500);
    }
}


const c = <HTMLCanvasElement> document.getElementById('myCanvas');
var ctx =<CanvasRenderingContext2D> c.getContext('2d');
const button = document.querySelector("#drawLine")!;
const buttonCircle = document.querySelector('#drawCircle')!;
const buttonText = document.querySelector('#drawText')!;
button?.addEventListener('click', () => {
    for (let index = 0; index < 5; index++) {
        
        const firstLine:Line = new Line(ctx,MathHelper.generateRandom(),MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
        firstLine.drawLine();
    }
});

buttonCircle?.addEventListener('click', () => {
    for (let index = 0; index < 500; index++) {
        
        const firstCircle:Circle = new Circle(ctx, MathHelper.generateRandom(),MathHelper.generateRandom(), 5);
        firstCircle.drawCircle();
        
    }
});


buttonText?.addEventListener('click', () => {
    
        
        const firstText:TextShape = new TextShape(ctx, MathHelper.generateRandom(),MathHelper.generateRandom(), 'Said');
        firstText.drawText();
        
    
});

/* firstLine.drawLine();
firstLine2.drawLine();

setTimeout(() => {
    window.location.reload();   
}, 500); */
const firstLine2:Line = new Line(ctx,MathHelper.generateRandom(),MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());

console.log( MathHelper.generateRandom())


