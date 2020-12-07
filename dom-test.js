// DOM => Document Object Model

// How create an element

const body = document.body
const title = document.createElement('h1')
title.style.textAlign = 'center'
title.textContent = `There are ${countries.length} in the world`
body.appendChild(title)

const countriesWrapper = document.createElement('div')
countriesWrapper.style.marginTop = '50px'
countriesWrapper.style.display = 'flex'
countriesWrapper.style.flexWrap = 'wrap'
countriesWrapper.style.justifyContent = 'space-around'

for (const name of countries) {
  let country = document.createElement('div')
  let content = document.createElement('p')
  country.style.width = '250px'
  country.style.height = '150px'
  country.style.border = '2px solid #888888'
  country.style.textAlign = 'center'
  country.style.lineHeight = '150px'
  country.style.marginBottom = '15px'
  country.style.borderRadius = '8px'
  content.textContent = name.toUpperCase()

  if (name.includes('land')) {
    country.style.background = '#9b7653'
    country.style.color = 'white'
  }
  country.appendChild(content)
  countriesWrapper.appendChild(country)
}

body.appendChild(countriesWrapper)
