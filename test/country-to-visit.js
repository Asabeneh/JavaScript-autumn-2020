const wrapper = document.querySelector('.wrapper')
const button = document.createElement('button')
button.textContent = 'Get a country'
const countryDiv = document.createElement('div')
let index = Math.floor(Math.random() * countriesData.length)
let country = countriesData[index]

const createCountry = (country) => {
  const content = `<div>
            <div>
                <img src =${country.flag} />
                </div>
                <h3>${country.name.toUpperCase()}</h3>
            <div>
                <div class="description">
                <p><span>Capital </span>:${country.capital}</p>
                <p><span>Population</span>:  ${country.population.toLocaleString()}</>
                <p><span>Languages</span>: ${country.languages.join(', ')}</p>
            </div>
        </div>`
  return content
}

countryDiv.innerHTML = createCountry(country)

wrapper.appendChild(countryDiv)
wrapper.appendChild(button)
button.addEventListener('click', () => {
  index = Math.floor(Math.random() * countriesData.length)
  country = countriesData[index]
  countryDiv.innerHTML = ''
  countryDiv.innerHTML = createCountry(country)
})
