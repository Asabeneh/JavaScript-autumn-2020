// Objects

const emptyObject = {}

const car = {
  color: 'red',
  weight: 3000,
  model: 2020,
  type: 'Toyota',
  'No of doors': 4,
}

// Getting value
console.log(car.color)
console.log(car.weight)
console.log(car.model)
console.log(car['No of doors']) // a must to use square bracket

// Modify the object

car.type = 'Nissan'
console.log(car)

// setting or a dding a new key to the object
car.grearBox = 'Automatic'
console.log(car)

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  role: 'Fullstack Developer',
  isMarried: true,
  gender: 'male',
  skills: ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Python'],
  'phone number': '045828282',
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
  getPersonInfo() {
    return `${this.getFullName()} is a ${this.role} based in ${this.city}, ${
      this.country
    }. He is ${this.age} years young.`
  },
}

console.log(person.skills.length)
console.log(person.getPersonInfo())
console.log(person.getFullName())
