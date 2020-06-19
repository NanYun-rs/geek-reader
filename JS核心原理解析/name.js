// import {
//   a
// } from './index.js'

// console.log('a a',a)


// const a = require('./index')
// console.log('a', a)

// export const a = '123'


module.exports = {
  a: '123'
}



// name.js

export const a = '123'

// index.js

console.log('a before', a)

import { a } from './name'

console.log('a after', a)