console.log('This is a refresher')

// Functions =>

function nameOfTheFunction() {
  return 'I am returning something'
}

console.log(nameOfTheFunction())

// function addTwoNumbers(a, b) {
//   return a + b
// }

// console.log(addTwoNumbers(1, 2))
// console.log(addTwoNumbers(3, 2))

// const addTwoNumbers = function (a, b) {
//   return a + b
// }
// console.log(addTwoNumbers(1, 9))

const addTwoNumbers = (a = 2, b = 3) => a + b

console.log(addTwoNumbers(1, 9))
console.log(addTwoNumbers())

const emptyObject = {}
console.log(emptyObject)

const car = {
  model: 2020,
  make: 'Toyota',
  color: 'blueback',
  carInfo() {
    // this key word refers to the object itself
    return `This car is ${this.make}. It is from ${this.country}. I was made in ${this.model}.`
  },
  gearbox: 'Automatic',
}

console.log(car.model)
console.log(car['model'])

car.manufacturer = 'Toyoyta'
car.country = 'Japan'
console.log(car)

console.log(car.carInfo())

// hasOwnProperty
console.log(car.hasOwnProperty('model'))
console.log(car.hasOwnProperty('make'))
console.log(car.hasOwnProperty('make'))

console.log(car.hasOwnProperty('gearbox'))

// Different Object methods which can help you to solve problems
// keys, values, assign

const car2 = Object.assign({}, car)

console.log(car2)

car2.millage = 5000

console.log(car)
console.log(car2)

const keys = Object.keys(car)
console.log(keys)

const values = Object.values(car)
console.log(values)

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    point: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
}

// for, while , do while, forEach, for of
// for

for (const user in users) {
  console.log(user)
  console.log(users[user])
}

// Higher order function -> f(g(h(x)))
// higher order function takes function as a parameter or return a function

const makeSquare = (n) => n ** 2

const cube = (callback, n) => {
  return callback(n) * n
}

console.log(cube(makeSquare, 2)) // 2 ** 3
console.log(cube(makeSquare, 3))

const doArthimetic = () => {
  const addTwo = (a, b) => a + b
  const mult = (a, b) => a * b

  return { addTwo: addTwo, mult: mult }
}

console.log(doArthimetic())
console.log(doArthimetic().addTwo(1, 2))
console.log(doArthimetic().mult(2, 3))

// Functional Programming

const numbers = [1, 2, 3, 4, 5, 3] // => map

// const squaredNums = []

// for (const n of numbers){
//     console.log(makeSquare(n))
//     squaredNums.push(makeSquare(n))
// }

// console.log(squaredNums)

const squaredNums = numbers.map((n) => n * n)
console.log(squaredNums)

const countries = ['FINLAND', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const countriesWithUppercase = countries.map((country) => [
  country,
  country.toUpperCase(),
  country.length,
])

console.log(countriesWithUppercase)

// Filter =>

const evenNums = numbers.filter((n) => n % 2 === 0)
console.log(evenNums)

const oddNums = numbers.filter((n) => n % 2 !== 0)
console.log(oddNums)

const countriesWithLand = countries.filter((country) =>
  country.toLowerCase().includes('land')
)

console.log(countriesWithLand)

// Reduce => manago, guava, papaya => juice

const total = numbers.reduce((acc, cur) => {
  return acc + cur
}, 0)
console.log(total)

const three = numbers.find((n) => n === 3)

console.log(three)

const countryWithWay = countries.find((country) =>
  country.toLowerCase().includes('way')
)

console.log(countryWithWay)