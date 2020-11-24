console.log('Let us do the quiz')

// question 1, function declaration
// Make a square of a number

/*
function makeSquare (n) {
 let square = n * n
 return square
}

console.log(makeSquare(2))
console.log(makeSquare(3))

*/
/*
// Function expression
const  makeSquare = function(n) {
  let square = n * n
  return square
}

console.log(makeSquare(2))
console.log(makeSquare(3))
*/

/*
// Function expression
const makeSquare = (n) =>  n ** 2

console.log(makeSquare(2))
console.log(makeSquare(3))
*/

// question 2 -calculate average
const ages = [22, 25, 28, 30, 35, 40, 19, 38, 24, 32]

let n = ages.length
console.log(n)

console.log('from the loop')
let sum = 0

for (const age of ages) {
  sum = sum + age
}

console.log(sum)
console.log(sum / n)

// 2, 3, 4 =>  (2 + 3 +4)/3 = (9)/3 = 3

// question 2
function calcuateAverage(arr) {
  let n = arr.length
  let sum = 0
  for (const element of arr) {
    sum = sum + element
  }
  return sum / n
}

console.log(calcuateAverage(ages))

console.log(calcuateAverage([2, 3, 4]))
const weight = [68, 70, 75, 85, 65, 75, 80, 68]

console.log(calcuateAverage(weight))
console.log(countries)

// Find countries containing a string land

const countriesWithLand = (arr) => {
  const newArray = []
  for (const element of arr) {
    if (element.includes('land')) {
      newArray.push(element)
    }
  }
  return newArray
}

console.log(countriesWithLand(countries))

// Countries start with certain character:eg F:Finland, Fiji, France etc
const countriesStartWithCertainChar = (arr, char) => {
  let newArr = []
  for (const element of arr) {
    if (element.startsWith(char)) {
      newArr.push(element)
    }
  }
  console.log(newArr)
  return newArr.length
}

console.log(countriesStartWithF(countries,'I'))