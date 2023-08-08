// // validate form
/* *****************************************************************************/
const array = [];

const validation = function () {

  const nameInput = document.querySelector('#name');
  const gradeInput = document.querySelector('#grade');
  const nameError = document.querySelector('#nameError');
  const gradeError = document.querySelector('#gradeError');
  const departmentError = document.querySelector('#DepartmentError');
  const sdDepart = document.getElementById('SD');
  const oSDepart = document.getElementById('OS');
  const eLDepart = document.getElementById('EL');

  const table = document.getElementById("recordTable");

  // const array = [];

  nameError.textContent = '';
  gradeError.textContent = '';
  departmentError.textContent = '';

  const name = nameInput.value;
  const grade = gradeInput.value;

  // Validate the form fields
  if (name === '') {
      nameError.textContent = 'student name is required';
  } else if (isNaN(name) === false) {
      nameError.textContent = 'student name should only contain letters and spaces';
  }

  if (isNaN(grade) || grade < 0 || grade > 100) {
      gradeError.textContent = 'grade should be a number between 0 and 100';
  }

  if (sdDepart.checked || oSDepart.checked || eLDepart.checked) {
      departmentError.textContent = '';
  } else {
      departmentError.textContent = 'you must choose a department name';
  }

  if (nameError.textContent === '' && gradeError.textContent === '' && departmentError.textContent === '')
  {
      const newRow = table.insertRow(-1);
      const addName = newRow.insertCell(0);
      const addGrade = newRow.insertCell(1);
      // const addDepartment = newRow.insertCell(2);

      addName.innerHTML = name;
      addGrade.innerHTML = grade;

      if (sdDepart.checked) {
          // addDepartment.innerHTML = sdDepart.value;
          newRow.bgColor = 'blue';
      } else if (oSDepart.checked) {
          // addDepartment.innerHTML = oSDepart.value;
          newRow.bgColor = 'yellow';
      } else if (eLDepart.checked) {
          // addDepartment.innerHTML = eLDepart.value;
          newRow.bgColor = 'red';
      }

      array.push({ name: name, grade: grade });
      // array.push( name, grade );

      document.getElementById("validationForm").reset();

  }

};

const sortTable=function() {
  const sortBy = document.getElementById("sortSelect").value;

  array.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "grade") {
      return a.grade - b.grade;
    }
  });

  afterSortedTable();
}

const afterSortedTable = function() {

  const sdDepart = document.getElementById('SD');
  const oSDepart = document.getElementById('OS');
  const eLDepart = document.getElementById('EL');

  const table = document.getElementById("recordTable");
  table.innerHTML = ""; // Clear the table

  for (const student of array) {
    const newRow = table.insertRow(-1);
    const addName = newRow.insertCell(0);
    const addGrade = newRow.insertCell(1);

    addName.innerHTML = student.name;
    addGrade.innerHTML = student.grade;

    if (sdDepart === 'SD') {
      newRow.bgColor = 'blue';
    } else if (oSDepart === 'OS') {
      newRow.bgColor = 'yellow';
    } else if (eLDepart === 'EL') {
      newRow.bgColor = 'red';
    }


  }

};
