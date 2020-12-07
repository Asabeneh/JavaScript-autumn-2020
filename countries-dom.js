const genHexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return '#' + hexa
}

const body = document.body
const countriesWrapper = document.createElement('div')

countriesWrapper.style.display = 'flex'
countriesWrapper.style.flexWrap = 'wrap'
countriesWrapper.style.width = '75%'
countriesWrapper.style.margin = 'auto'

body.appendChild(countriesWrapper)

for (const country of countries) {
  let countryDiv = document.createElement('div')
  countryDiv.textContent = country.toUpperCase()
  countryDiv.style.width = '150px'
  countryDiv.style.height = '150px'
  countryDiv.style.borderRadius = '5px'
  countryDiv.style.textAlign = 'center'
  countryDiv.style.lineHeight = '150px'
  countryDiv.style.margin = '15px'
  if (country.toLowerCase().includes('land')) {
    countryDiv.style.background = '#804A4E'
  } else {
    countryDiv.style.background = genHexaColor()
  }
  countriesWrapper.appendChild(countryDiv)
}
