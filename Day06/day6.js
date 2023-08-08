// Q1: sliding

let firstImage = document.querySelector('#firstImage');
firstImage.counter = 1;
let id;  // id is declared but has not assigne a value in JS

slideShow.onclick = function() {
  // console.log('hi')
  if (id === undefined) {
    slideShow.id = setInterval(() => {
        firstImage.counter++;
        if (firstImage.counter >= 8) {
          // return to the first image
          firstImage.counter = 1;
        }
        firstImage.src = `../images/${firstImage.counter}.jpg`;
      }, 1000);
    }
};

nextImage.onclick = function() {
  // console.log('hi next')
  firstImage.counter++;
  if (firstImage.counter >= 8) {
    // return to the first image
    firstImage.counter = 1;
  }
  firstImage.src = `../images/${firstImage.counter}.jpg`;
};

perviousImage.onclick = function() {
  // console.log('hi pervious')
  firstImage.counter--;
  if (firstImage.counter < 1) {
    firstImage.counter = 8;
  }
  firstImage.src = `../images/${firstImage.counter}.jpg`;
};

stopSlide.onclick = function () {
  clearInterval(slideShow.id);
  id = undefined; // for when i press again on the slide button continue with me my slider from the image i stoped at
};
// *******************************************************************

// Q2: boxes

const boxes = document.querySelectorAll('#box_1, #box_2, #box_3');

const copyClick=function(event) {
    const clickedBox = event.target;
    const newBox = clickedBox.cloneNode(true);
    // ----------------
    newBox.addEventListener('click', copyClick);
    // ----------------
    clickedBox.removeEventListener('click', copyClick);
    // ----------------
    document.body.appendChild(newBox);
}

boxes.forEach(box => {
    box.addEventListener('click', copyClick);
});


// *******************************************************************

// Q3: add validation
// first one

const validation=function(){
  const nameInput = document.querySelector('#name');
  const gradeInput = document.querySelector('#grade');
  const nameError = document.querySelector('#nameError');
  const gradeError = document.querySelector('#gradeError');

  nameError.textContent = ''; // using for no error
  gradeError.textContent = '';

  const name = nameInput.value;
  const grade = gradeInput.value;

  if (name === '') {
    nameError.textContent = 'student name is required';
  } else if (isNaN(name) === false) {
    nameError.textContent = 'student name should only contain letters and spaces';
  }

  if (isNaN(grade) || grade < 0 || grade > 100 || grade === '') {
    gradeError.textContent = 'grade should be a number between 0 and 100';
  }

  if (nameError.textContent === '' && gradeError.textContent === '') {
    console.log('Name:', name);
    console.log('Grade:', grade);
  }
};


// ******************************************************
// another
// ************

// const validation=function(){
//   const nameInput = document.querySelector('#name');
//   const gradeInput = document.querySelector('#grade');

//   const name = nameInput.value;
//   const grade = parseFloat(gradeInput.value);

//   let newSpanError = document.createElement('span');
//   newSpanError.textContent = 'you must enter a name and a grade number must be between 0 and 100';
//   newSpanError.style = 'color: red'

//   if (isNaN(grade) || grade < 0 || grade > 100 ||name == ''){

//     validationForm.appendChild(newSpanError);

//     // console.log("you must enter a name and a grade number must be between 0 and 100")
//   }else{
//     console.log('Student Name is:', name);
//     console.log('Student Grade is:', grade);
//     newSpanError.remove();
//   }

// }
