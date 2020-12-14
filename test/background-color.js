const genHexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return '#' + hexa
}

const showDateTime = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const now = new Date()
  const year = now.getFullYear()
  const month = months[now.getMonth()]
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  const dateMonthYear = `${month.substr(0, 3)} ${date}, ${year}`

  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime + `:${seconds}`
}

const body = document.body
const wrapper = document.querySelector('.wrapper')
body.style.backgroundColor = genHexaColor()
const wrapperItem = document.querySelector('.wrapper-item')
wrapper.style.height = '100vh'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
const p = document.createElement('p')
p.style.fontSize = '90px'
p.style.fontFamily = 'Poppins'
p.style.color = 'white'
const button = document.createElement('input')
button.type = 'color'
button.textContent = 'CHANGE BACKGROUND'
button.style.padding = '20px'
button.style.border = 'none'
button.style.outline = 'none'
button.style.cursor = 'pointer'
button.style.borderRadius = '10px'
button.style.display = 'block'
button.style.fontFamily = 'Poppins'

wrapperItem.appendChild(p)
setInterval(() => {
  p.textContent = showDateTime().toUpperCase()
}, 1000)
wrapperItem.appendChild(button)
button.addEventListener('input', () => {
  body.style.backgroundColor = button.value
})
