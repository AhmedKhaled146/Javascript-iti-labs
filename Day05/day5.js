// // Q1: HTML page

// A:




// Q2: timer in title

function timerInTitle() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    if (hour > 12) {hour = hour - 12}
    if (minute < 10) {minute = "0" + minute}
    if (second < 10) {second = "0" + second}
    document.title = hour + ":" + minute + ":" + second
    setInterval(timerInTitle, 1000)
    }

timerInTitle()
// ****************************************************************

// // Q3:
// *******************
function startSlidingImage(imageObject) {
  let counter = 0;

  const id = setInterval(() => {
    counter = (counter + 1) % imageObject.length;
    document.getElementById("slidingImage").src = imageObject[counter];
  }, 1000);

  return id;
}

const images = [
  "../images/1.jpg",
  "../images/2.jpg",
  "../images/3.jpg",
  "../images/4.jpg",
  "../images/5.jpg",
];
const timerId = startSlidingImage(images);

function stopSliding(timerId) {
  clearInterval(timerId);
}

setTimeout(() => {
  stopSliding(timerId);
}, 5000);
// *******************


// *************************************************************

// Q4: Two pages and console the Value

let urlParams = new URLSearchParams(document.location.search);
let name_2 = urlParams.get("name");
let age = urlParams.get("age");
console.log("The Name is :", name_2);
console.log("The Age is :", age);


function getVal() {
  let val = document.querySelector('input[name=the_value]').value;
  console.log(val);

}

// ******************************************************
// Q5:

class Engine{
  static #count = 0;
  constructor(color)
  {
      this.color = color
      Engine.#count++
      console.log(Engine.#count)
      if (new.target.name === Engine) {
          throw new Error("This class cannot be instantiated directly.") }
  }
  static move(){
      throw new Error("moving")
  }
}

class Car extends Engine
{
  #ownerName = '';
  constructor(brandName, productionYear, color, src)
  {
      super(color);
      this.image = document.createElement("img");
      this.image.width = '500';
      this.image.src = src;
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
const Toyota = new Car("Toyota", 2020, "Blue", '../images/car.png');
const Honda = new Car("Honda", 2020, "Red", '../images/car.png');
const Lancer = new Car("lancer", 2020, "Green", '../images/car.png');

Toyota.ownerName='ahmed'
Honda.ownerName='khaled'
Lancer.ownerName='ibrahim'

function createNewCar(carObject) {
  const carDetails = document.createElement("div");
  carDetails.innerHTML = `
      <h1>Brand Name: ${carObject.brandName}</h1>
      <h3>Year is: ${carObject.productionYear}</h3>
      <h3>Color is: ${carObject.color}</h3>
  `;
  carDetails.appendChild(carObject.image);
  document.body.appendChild(carDetails);
}
createNewCar(Toyota);
createNewCar(Honda);
createNewCar(Lancer);
