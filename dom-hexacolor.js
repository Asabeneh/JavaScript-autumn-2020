const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

// DOM => Document Object Model

// How create an element

const body = document.body
const title = document.createElement('h1')
title.style.textAlign = 'center'
title.textContent = `Hexadecimal Colors`
body.style.width = '85%'
body.style.margin='auto'
body.appendChild(title)

const countriesWrapper = document.createElement('div')
countriesWrapper.style.marginTop = '50px'
countriesWrapper.style.display = 'flex'
countriesWrapper.style.flexWrap = 'wrap'
countriesWrapper.style.justifyContent = 'space-around'

for (let i = 0; i < 100; i++) {
  let country = document.createElement('div')
  let content = document.createElement('p')
  let color = hexaColor()
  country.style.width = '150px'
  country.style.height = '150px'
  country.style.textAlign = 'center'
  country.style.lineHeight = '120px'
  country.style.marginBottom = '15px'
  country.style.borderRadius = '5px'
  content.textContent = color
  content.style.fontSize = '22px'
  country.style.background = color
  country.style.color = 'white'
  country.appendChild(content)
  countriesWrapper.appendChild(country)
}

body.appendChild(countriesWrapper)
