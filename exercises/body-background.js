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
body.style.height = '100vh'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
const wrapper = document.querySelector('.wrapper')
wrapper.style.fontSize = '60px'

setInterval(() => {
  wrapper.textContent = showDateTime()
  body.style.background = genHexaColor()
}, 1000)
