const makeSquare = (n) => n ** 2

const makeCube = (callback, n) => {
  return callback(n) * n
}
console.log(makeCube(makeSquare, 2))
console.log(makeCube(makeSquare, 10))

const calculateArea = (l, w) => l * w

const volumeOfPrism = (callback, l, w, h) => {
  return callback(l, w) * h
}

console.log(volumeOfPrism(calculateArea, 10, 20, 5))

const arthimeticFunc = () => {
  const add = (a, b) => a + b
  const product = (a, b) => a * b
  const div = (a, b) => a / b
  const remainder = (a, b) => a % b

  return {
    add,
    product,
    div,
    remainder,
  }
}

console.log(arthimeticFunc().add(3, 4))
console.log(arthimeticFunc().product(3, 4))
console.log(arthimeticFunc().div(3, 4))
console.log(arthimeticFunc().remainder(3, 4))
