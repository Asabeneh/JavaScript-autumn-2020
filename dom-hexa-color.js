// Creating
// creatElement

const body = document.body
const colorWrapper = document.createElement('div')
body.appendChild(colorWrapper)

colorWrapper.style.display = 'flex'
colorWrapper.style.flexWrap = 'wrap'
colorWrapper.style.width = '75%'
colorWrapper.style.margin = 'auto'

// const title = document.createElement('h1')
// title.textContent = 'DOM is great'
// title.style.color = 'green'
// body.appendChild(title)
// const firstPara = document.createElement('p')
// firstPara.textContent =
//   'JavaScript is awesome and you should learn it. You will be able make every website very dynamic'

// body.appendChild(firstPara)

// for (let i = 0; i < 1000; i++) {
//   let number = document.createElement('h1')
//   number.style.textAlign = 'center'
//   number.style.fontSize = '72px'
//   if (i % 2 === 0) {
//     number.style.color = 'green'
//   } else {
//     number.style.color = 'red'
//   }
//   number.textContent = i
//   body.appendChild(number)
// }

// #012ef3

const genHexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return '#' + hexa
}

for (let i = 0; i < 10000; i++) {
  let div = document.createElement('div')
  let backgroundColor = genHexaColor()
  div.textContent = backgroundColor
  div.style.width = '150px'
  div.style.height = '150px'
  div.style.margin = '10px'
  div.style.borderRadius = '8px'
  div.style.textAlign = 'center'
  div.style.lineHeight = '150px'
  div.style.backgroundColor = backgroundColor
  colorWrapper.appendChild(div)
}

// 