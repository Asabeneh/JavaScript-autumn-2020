const showDateTime = () => {
  const now = new Date()
  const date = now.getDate()
  const month = now.getMonth() + 1
  const year = now.getFullYear()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  return `${date}/${month}/${year} ${hours}:${minutes}: ${seconds}`
}

const genHexaColor = () => {
  let str = '0123456789abcdef'
  let hexa = ''

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    hexa = hexa + str[index]
  }
  return '#' + hexa
}

console.log(genHexaColor())

const body = document.body
const wrapper = document.querySelector('.wrapper')

const massInput = document.querySelector('.mass')
const heightInput = document.querySelector('.height')

const button = document.querySelector('button')

// bmi = mass/(h * h)
// weight  = mass * gravity

let p = document.createElement('p')
button.addEventListener('click', () => {
  let mass = Number(massInput.value)
  let height = Number(heightInput.value)

  let bmi = mass / (height * height)
  p.textContent = `You bmi is ${bmi.toFixed(2)} at the moment`
  wrapper.appendChild(p)
})

// element.addEventListener('takeeventyep', () => {
//   // your code goes here
// })
