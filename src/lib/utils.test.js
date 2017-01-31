const {partial} = require('./utils')
const snapshot = require('snap-shot')

const add = (a, b) => a + b

test('partial', () => {
  const inc = partial(add, 1)
  snapshot(inc(2))
})

test('partial multiple arguments', () => {
  const eleven = partial(add, 1, 10)
  snapshot(eleven())
})
