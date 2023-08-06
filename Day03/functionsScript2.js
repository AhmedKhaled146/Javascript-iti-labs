// Q1:
// ************

const firstLetterToUpper=function(string){
    result = "";
    let subString = string.split(" ");
    let sentence = [];
    for(let item of subString)
    {
        // console.log(item[0].toUpperCase()+item.slice(1,item.length).toLowerCase())

        let sub = item[0].toUpperCase()+item.slice(1,item.length).toLowerCase()

        arrayOfWords = sentence.push(sub)
        // arrayOfWords.toString()

    }
    return arrayOfWords
}
firstLetterToUpper("the first letter")
// **********************************


// Q2:
// ***********************************
const maxWordInString=function(string){
    let subString = string.split(" ");
    let maxLengthWord = '';
    let maxLength = 0;
    // console.log(subString)
    for(let item of subString)
    {
        // console.log(item.length)
        if(item.length > maxLength)
        {
            maxLength = item.length
            maxLengthWord = item
        }
    }
    console.log(maxLengthWord)
}
// maxWordInString("the biggest word")

//  **************************

// Q3:
// ***************************

const orderAlphabet=function(word)
{
    let orderAlphabetWord = word.split("").sort().join("")
    console.log(orderAlphabetWord)
}
// orderAlphabet("javascript")


// Q4:
// *******************************
let date = new Date()
// console.log(date)
const getMonth=function(dateDay)
{
    dateToString = dateDay.toString()
    splitStringTerm = dateToString.split(" ")
    return splitStringTerm[1]
}
// console.log(getMonth(date))
// ********************************

// Q5:
// *********************
const randomNumber=function()
{
    let arrayOfNumber = [];
    for(let i = 0; i < 5; i++)
    {
        let randomNumberToArray = Math.floor(Math.random() * 10) + 1;
        arrayOfNumber.push(randomNumberToArray);
    }
    console.log(arrayOfNumber)
}
// *********************

// Q6: Testing

// let arrayNumber = [2,1,3,2,7,2,8,4,3,6,10,9,12]
// console.log(arrayNumber.sort())
