function sum(a, b) {
  return a + b;
}

function capitalize(string){
  let stringArray = string.split("")
  stringArray[0] = stringArray[0].toUpperCase()

  return stringArray.join("")
}

function reverseString(string){
  return string.split("").reverse().join("")
}

function calculator(num1,operator,num2){
  //add, subtract, multiply, divide
  switch(operator){
    case "+": return num1+num2;
    case "-": return num1-num2;
    case "*": return num1*num2;
    case "/": return num1/num2;
  }

}


function ceasarCipher(string, shift) {
  let alpha = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "q", "y", "z"
  ]

  let result = [];
  let stringIndex = [];
  let stringArray = string.split("");
  let upperCaseIndex = [];

  //tracks index of where it's upper case
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i].toUpperCase())
      upperCaseIndex.push(i)

    stringArray[i] = stringArray[i].toLowerCase()

  }

  //if it's a letter turn it into a number else keep the same
  for (let i = 0; i < stringArray.length; i++) {
    if (alpha.includes(stringArray[i])) {
      stringIndex.push(alpha.indexOf(stringArray[i]))
    } else stringIndex.push(stringArray[i])
  }

  // makes sure the shifted index is not over 25 or below 0
  for (let i = 0; i < stringIndex.length; i++) {
    if (typeof stringIndex[i] == "number") {
      stringIndex[i] += shift
      while (stringIndex[i] > 25) stringIndex[i] -= 26
      while (stringIndex[i] < 0) stringIndex[i] += 26
    }
  }

  // Turns only numbers in string index back to letters
  for (let i = 0; i < stringIndex.length; i++) {
    if (typeof stringIndex[i] == "number") {
      stringIndex[i] = alpha[stringIndex[i]]
    }
  }

  // Turn the letters at at specific indexes to uppercase
  for (let i = 0; i < upperCaseIndex.length; i++) {
    stringIndex[upperCaseIndex[i]] = stringIndex[upperCaseIndex[i]].toUpperCase()
  }

  result = stringIndex.join("")
  return result;
}

function analyzeArray(array){
  let result = {};

  array = array.sort((a,b) => {
    return a-b;
  })

  result.average = (array.reduce((initial,next) => initial + next , 0))/array.length
  result.min = array[0]
  result.max = array[array.length-1]
  result.length = array.length
  

  return result;

}

module.exports = {sum,capitalize,reverseString,calculator,ceasarCipher,analyzeArray};