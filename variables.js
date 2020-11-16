// comments-> this is a single line comment

/*
this is a multiple
line comment
*/
// Lets talk about variables
// variables are containers. It store data in a memory location

// var, let, const
// camelCase

const gravity = 9.81

// let's move on to data types
// string, numbers, boolean(true or false),null, undefined, object, Symbol
// STRING => single quote, double quote, or `back stick`

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let job = `Teacher`
let country = 'Finland'
let space = ' '
let age = 200

// Concatenation -> it is a way to connect to strings

let fullName = firstName + space + lastName
console.log(fullName)

// built in function
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof job)
console.log(typeof space)
// String method
// length
console.log(firstName.length)
console.log(lastName.length)
console.log(firstName.includes('y'))
console.log(firstName.toLowerCase())
console.log(firstName.toUpperCase())
console.log(firstName.startsWith('a'))
console.log(firstName.toLowerCase().startsWith('a'))

const paragraph =
  'My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.'
console.log(paragraph.length)

let sentence =
  'I love JavaScript. If you do not love JavaScript what else you do you love. There is nothing like JavaScript'
console.log(sentence.indexOf('love'))
console.log(sentence.lastIndexOf('love'))
console.log(sentence.endsWith('JavaScript'))

const words = sentence.split(' ')
console.log(words)
console.log(typeof words)

// I am Asabeneh Yetayeh. I am 200 years old. I live in Finland.

let sent =
  'I am ' +
  fullName +
  '. ' +
  'I am ' +
  age +
  ' years old. ' +
  'I live in ' +
  country

let personInfo = `I am ${fullName}. I am ${age} years old. I live in ${country}`

console.log(sent)
console.log(personInfo)

// The value of 2 x 3 = 6.
// The value of 2^10=1024.

let a = 2
let b = 3
let prod = a * b
let exp = a ** 10

console.log(`The value of ${a} x ${b} = ${prod}.`)
console.log(`The value of ${a}^${10} = ${exp}.`)
console.log(`${a} is less ${b}: ${a < b}`)

// Data type:  numbers-> 0, negative, positive,
// Arithmetic Operations:+, -, *, /, %, **
let num1 = 2
let num2 = 3
let sum = num1 + num2
let sub = num2 - num1
let mult = num1 * num2
let div = num2 / num1
let remainer = num2 % num1
let exponential = num2 ** num1
console.log(remainer)
console.log(7 % 4)
console.log(exponential)

// Booleans => true or false
//

let isRaining = false
let isMarried = true
let isLightOn = true
let time = 4
let isClassOver = time == 4

console.log(isClassOver)
console.log(2 > 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 == 2)
console.log(2 === 2)
console.log(2 == '2')
console.log(2 === '2')

// undefined

let city

console.log(typeof city)
let value = null

console.log(typeof value)
console.log(words)
console.log(typeof words)

// Who has never been in a shop?
const numbers = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 111, 200] // empty array

console.log(numbers)
console.log(numbers.length)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])

let lastIndex = numbers.length - 1
console.log(numbers[lastIndex])
numbers[0] = 100
console.log(numbers)
numbers[2] = 300

console.log(numbers)
numbers[lastIndex] = 2
console.log(numbers)

const shoppingCart = [
  'Coffee',
  'Candy',
  'Honey',
  'Milk',
  'Meat',
  'Avocado',
  'Tea',
]
console.log(shoppingCart)
shoppingCart[2] = 'Sugar'
console.log(shoppingCart)

let lstInx = shoppingCart.length - 1
shoppingCart[lstInx] = 'Chocolate'
console.log(shoppingCart)
// push, shift, unshift, pop, splice
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart.shift()
console.log(shoppingCart)
shoppingCart.push('Tomato')
console.log(shoppingCart)
shoppingCart.unshift('Coffee')
console.log(shoppingCart)
// splice(index,how )
shoppingCart.splice(1, 2)
console.log(shoppingCart)

// Loops =>
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')

