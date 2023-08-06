const bye = 3.14;

function Ball(top, left, radius, color){

    this.top=top;
    this.left=left;
    this.radius=radius;
    this.color=color;

    this.calculateArea=function(){
        return bye * (radius ** 2)
    }

    this.toString=function(){
        console.log('the dimention of ball Top = ' + this.top + ', and Left = ' + this.left + ' and its color is ' + this.color)
    }

}

let ball_1 = new Ball(4, 2, 15, "red")
let ball_2 = new Ball(14, 15, 10, "blue")
let ball_3 = new Ball(10, 5, 12, "yellow")
let ball_4 = new Ball(12, 9, 14, "black")

arrayOfBalls = [ball_1, ball_2, ball_3, ball_4];
// console.log(ball_1.top)

for(let item of arrayOfBalls)
{
    console.log(`the color of ball is ${item.color}, and its area is ${item.calculateArea()}`)
}

// function logArrayElements(arr) {
//     // console.log('a[' + index + '] = ' + element);
//     console.log(arr.sort(()));
//     }

const sortedArray=function(arrayOfBalls){
    console.log(arrayOfBalls.sort((a, b) => a.top - b.top))
}


sortedArray(arrayOfBalls)

// ***************************************************************************
class Engine{
    static #count = 0;
    constructor(color)
    {
        this.color = color
        Engine.#count++
        console.log(Engine.#count)
        if (new.target === Engine) {
            throw new Error("This class cannot be instantiated directly.") }
    }
    static move(){
        throw new Error("moving")
    }
}

class Car extends Engine
{
    #ownerName = '';
    constructor(brandName, productionYear, color)
    {
        super(color);
        this.brandName = brandName;
        this.productionYear = productionYear;
    }
    set ownerName(ownerName){
        this.#ownerName = ownerName
    }
    get ownerName(){
        return this.#ownerName
    }
    move() {
        console.log(`brand: ${this.brandName}, year: ${this.productionYear}, color: ${this.color}, moving`);
    }
}
const Toyota = new Car("Toyota", 2020, "Blue");
const Honda = new Car("Honda", 2020, "Red");
const lancer = new Car("lancer", 2020, "Green");

Toyota.ownerName='ahmed'

