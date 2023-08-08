
let egg = document.images[0];
let bask = document.getElementById("bask");

let random = function () {
  let number = Math.abs(
    Math.floor(Math.random() * window.innerWidth) - egg.width
  );
  return number;
};

let moveDown = function (eggObject, top) {
    let id = setInterval(() => {
      top += 10;
      if (top < window.innerHeight - egg.height) {
        document.images[0].style.top = top + "px";
      } else {
        if (
          Math.abs(parseInt(bask.style.left) - parseInt(egg.style.left)) < 100
        ) {
          clearInterval(id);
          egg.style.visibility = "hidden";
        } else {
          egg.src = "../images/egg brokken.jpeg";
        }
      }
    }, 100);
  };

egg.style.left = random() + "px";
let left = 0;
let moveRight = function () {
  left += 20;
  if (left < window.innerWidth - bask.width) {
    bask.style.left = left + "px";
  } else {
    left = window.innerWidth - bask.width;
  }
};
let moveleft = function () {
  left -= 20;
  if (left > 0) {
    bask.style.left = left + "px";
  } else {
    left = 0;
  }
};
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight")
  moveRight();
  if (event.key === "ArrowLeft")
  moveleft();
});


moveDown(egg, 0);


// const moveDown = function(imageObject, top){
//     let id = setInterval(()=>{
//         top += 10;
//         if (top < (window.innerHeight-imageObject.height))
//         {
//             document.images[0].style.top = top + "px"
//         }
//         else
//         {
//             clearInterval(id);
//         }
//     },50)
// }

// const moveLeft = function(){
//     const basket = document.querySelector('#basket');
//     let posX = 0;
//     moveAmount = 10;

//     document.addEventListener('keydown', (event) => {
//         switch (event.key) {
//             case 'ArrowLeft':
//                 posX -= moveAmount;
//                 break;
//             case 'ArrowRight':
//                 posX += moveAmount;
//                 break;
//         }

//         basket.style.transform = `translate(${posX}px)`;
//     });
// }
