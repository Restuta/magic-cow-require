
// // production code
// const doMagic = require('./command/do-magic').doMagic
// doMagic({color: 'magenta', message: 'You are one nice cow!'})
//
//
//
// // test code
// const createDoMagicCommand = require('./command/do-magic').createDoMagicCommand
//
// const testDoMagic = createDoMagicCommand({
//   chalk: require('chalk'),
//   cowsay: {
//     say({text}) {
//       return `🐮  ${text}`
//     }
//   },
//   log: console.log
// })
//
// testDoMagic({color: 'blue', message: 'Test cows everywhere!'})


// throws an error
const doIndexMagic = require('./command')

// doIndexMagic({color: 'cyan', message: 'You know what happens to cows when you use index.js files?'})
