// for, for of, for in, while , do while
// 1 x 1 = 1
/*
Loops
 Loops => for, while, do while, for of, for in, forEach
 */
// Loops -> why we need loop, what is loop
// Hello world

console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')

console.log('Hello, Sofia!')
console.log('Hello, Marc!')
console.log('Hello, William!')
console.log('Hello, Anna!')

let x = 0
console.log(x)
// x = x + 1
// x += 1
x++
console.log(x)

console.log('Loops start from here ...')
for (let i = 1; i < 11; i += 1) {
  console.log(i)
  console.log(`${i} x ${i} = ${i * i}`)
}

// 0 => 10

for (let i = 10; i >= 0; i--) {
  console.log(i)
}
const shoppingCart = [
  'Coffee',
  'Candy',
  'Honey',
  'Milk',
  'Meat',
  'Avocado',
  'Tea',
]
console.log(shoppingCart.length)

console.log(shoppingCart[6])
console.log(shoppingCart[2])

const students = [
  'Sofia',
  'Marc',
  'Marc',
  'Juli',
  'Juuli',
  'Anna',
  'Jyda',
  'Kati',
  'Jessra',
  'Essi',
  'Maisa',
]

for (let i = 0; i < shoppingCart.length; i++) {
  console.log(i)
  console.log(shoppingCart[i].toUpperCase())
}

for (let i = 0; i < students.length; i++) {
  console.log(
    `Welcome ${students[i]} to Modern JavaScript, I hope you will enjoy this course.`
  )
}

const arr = []
for (let i = 1; i < 101; i += 2) {
  arr.push(i)
}
console.log(arr)

const nums = [1, 2, 3, 4, 5]

// push, pop, shift, unshift

// [5, 4, 3, 2, 1]

const newArr = []
for (let i = nums.length - 1; i >= 0; i--) {
  let value = nums[i]
  newArr.push(value)
}
console.log(newArr)

const newStudents = []
for (let i = students.length - 1; i >= 0; i--) {
  let value = students[i]
  newStudents.push(value)
}

console.log(newStudents)

// Rule of thumb => use let for data which changes
// const for constant value for instance gravity, pi, array, object, function

// 0 => 5
// while

const squares = []
let i = 0
while (i < 6) {
  console.log('do something', i)
  squares.push(i * i)
  i++
}
console.log(squares)

let j = 0
do {
  console.log(j)
  j++
} while (j < -5)

// for of => with array

for (const item of shoppingCart) {
  console.log(item.toUpperCase())
}
for (const student of students) {
  console.log(student.toUpperCase())
}

const numbers = [1, 2, 3, 4, 5, 6]

for (const number of numbers) {
  if (number === 3) {
    continue
  }
  console.log(number, number ** 2)
}
const countries = [
  'Finland',
  'Estonia',
  'Ethiopia',
  'Sweden',
  'Norway',
  'Denmark',
]
for (const country of countries) {
  if (country.includes('ia')) {
    continue
  }
  console.log(country)
}
for (const country of countries) {
  if (country === 'Sweden') {
    break
  }
  console.log(country)
}

// for in, forEach

// Functions
// What is a function
// what is a the purpose of a function
// let , cons, var, if, for, function, else, break, continue

// Declaring a function
function nameOfTheFunction() {
  console.log('I am a function')
}

// calling a function
nameOfTheFunction()

// function addTwoNumbers(a, b) {
//   return a + b
// }

const addTwoNumbers = (a, b) => a + b

console.log(addTwoNumbers(20, 30))
console.log(addTwoNumbers(1, 9))
console.log(addTwoNumbers(100, 900))
console.log(addTwoNumbers(2.5, 1.5))

// function printFullName(firstName, lastName) {
//   let fullName = firstName + ' ' + lastName
//   return fullName
// }

const printFullName = (firstName, lastName) => firstName + ' ' + lastName

console.log(printFullName('Asabeneh', 'Yetayeh'))
console.log('Donald', 'Trump')
console.log('Joe', 'Biden')

// function squareOfNumber (n) {
//     let square = n ** 2
//     return square
// }
const squareOfNumber = (n) => n ** 2

console.log(squareOfNumber(1))
console.log(squareOfNumber(3))
console.log(squareOfNumber(10))
console.log(squareOfNumber(4))

// Write a function which reverse an array

function reverseArray(arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    let value = arr[i]
    newArr.push(value)
  }
  return newArr
}

console.log(reverseArray(countries))