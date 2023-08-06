printVariables(value1, value2, value3)

function printVariables(value1, value2, value3)
{
    console.log(value1, value2, value3)
}

console.log(localVar);
console.log(testingVAr);

let localVar = 90;
localVar = 90;

// call localVar before call function
console.log(localVar)

const printVariables=function(value1, value2, value3){

    // console.log(localVar) // undefined

    console.log(localVar) // when remove let

    // var localVar = 3;
    // testingVAr = 5;

    console.log(value1, value2, value3);

    // console.log(localVar);
    // console.log(testingVAr);

    // console.log(arguments);
}

// before calling

console.log(localVar);
console.log(testingVAr);

printVariables(3, 5, 66)

//  call localVar after call function
console.log(localVar)




// after calling

console.log(localVar);
console.log(testingVAr);

printVariables(3, 5, 66)

console.log(value1, value2, value3)

console.log(printVariables(3, 5, 66))

printVariables(3, 5) // less than 3 parameters and undefined variable


printVariables(3, 5);


printVariables(3, 5, 66, 122, 41);

console.log(arguments);



// let number1 = Number(prompt("enter number 1"))

Q2:

const number1 = Number(prompt('Enter the first number '));
const number2 = Number(prompt('Enter the second number '));
const sum = number1 + number2;
alert(`The sum of ${number1} and ${number2} is ${sum}`)




const sumNumbers=function(){
    let result = 0;
    const numOfNumber= Number(prompt('How Many Numbers you will sum: '));
    for(let i = 1; i <= numOfNumber; i++)
    {
        let number = Number(prompt(`Enter Number ${i}: `));
        result += number
        if (isNaN(number) == true)
        {
            alert("plz enter a number")
            return sumNumbers()
        }
    }
    alert(`result = ${result}`)
    // alert(result)

}

sumNumbers()
