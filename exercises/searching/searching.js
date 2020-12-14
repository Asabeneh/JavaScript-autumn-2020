const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('button')

console.log(countriesData[0].languages.join(', '))

const searchInput = document.querySelector('input')

const filterCountry = (arr, term) => {
  const filteredCountry = arr.filter((item) => {
    let name = item.name.toLowerCase()
    let capital = item.capital.toLowerCase()
    console.log(item.languages)
    let langs = item.languages.join(', ').toLowerCase()

    return (
      name.includes(term.toLowerCase()) ||
      capital.includes(term.toLowerCase()) ||
      langs.includes(term.toLowerCase())
    )
  })
  return filteredCountry
}

const showCountry = (country) => {
  const countryTemplate = `<div>
    <div>
      <img src =${country.flag} />
    </div>

    <div>
      <h3>${country.name.toUpperCase()}</h3>
      <p>${country.capital}</p>
      <p>${country.population.toLocaleString()}</p>
      <p>${country.languages.join(', ')}</p>
    </div>

  </div>`
  return countryTemplate
}

const generateCountries = (data) => {
  let countries = ''
  for (let i = 0; i < data.length; i++) {
    countries = countries + showCountry(data[i])
  }
  return countries
}

wrapper.innerHTML = generateCountries(countriesData)

searchInput.addEventListener('input', (e) => {
  let data = filterCountry(countriesData, e.target.value)
  wrapper.innerHTML = generateCountries(data)
})
