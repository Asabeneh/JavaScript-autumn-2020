const paragraph = document.querySelector('p')
console.log(paragraph)

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
for (const p of paragraphs) {
  console.log(p)
  p.style.background = 'green'
  p.style.color = 'white'
  p.style.padding = '15px'
  p.style.borderRadius = '5px'
}

// With a querySelector you use tag, id, or class
// querySelector -> selects one and the first
// querySelectorAll -> selects all the
