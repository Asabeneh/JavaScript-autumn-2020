let count = 0

let interval = setInterval(() => {
  console.log(count)
  count = count + 1
}, 1000)

clearInterval(interval)
setTimeout(() => {
  console.log('I will show up after 3 seconds')
}, 3000)
