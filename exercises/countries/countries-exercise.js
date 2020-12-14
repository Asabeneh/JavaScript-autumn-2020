const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('button')

let index = Math.floor(Math.random() * countriesData.length)

const showCountry = (country) => {
  const content = `<div>
    <p>${country.name}</p>
     <p>${country.capital}</p>
      <p>${country.population}</p>
       <img src =${country.flag} />
  </div>`
  wrapper.innerHTML = content
  document.body.appendChild(wrapper)
}

showCountry(countriesData[index])

button.addEventListener('click', () => {
  index = index = Math.floor(Math.random() * countriesData.length)
  showCountry(countriesData[index])
})
