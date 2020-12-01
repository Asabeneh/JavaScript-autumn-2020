console.log('Function revison')

// Function declaration
// function printFullName(firstName, lastName) {
//  return firstName + ' ' + lastName

// }

// console.log(printFullName('Asab', 'Yetay'))
// console.log(printFullName('Donald', 'Trump'))

// Arrow function

// const printFullName = (firstName, lastName) => {
//   return firstName + ' ' + lastName
// }

// Arrow function explicit return

const printFullName = (firstName = 'John', lastName = 'Doe') =>
  firstName + ' ' + lastName

console.log(printFullName('Asab', 'Yetay'))
console.log(printFullName('Donald', 'Trump'))
console.log(printFullName())

const makeSquare = (n) => n ** 2

console.log(makeSquare(2))

// weight = m*g
// g = 9.8

const calculateWeight = (m, g = 9.8) => {
  w = m * g
  return w
}
console.log(calculateWeight(100))
console.log(calculateWeight(100, 3.711))

const addTwoNumbers = (a = 2, b = 3) => a + b
console.log(addTwoNumbers(1, 1))
console.log(addTwoNumbers())


