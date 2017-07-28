/*
This is a proposal on how to achieve a safety net for modules that are removed from the app.
If that is the case we want to know at start time that something is not correct.

It's easly achiavable with direct require of those modules and avoiding index.js:
 */


// production code
const doMagic = require('./command/do-magic').doMagic
doMagic({color: 'magenta', message: 'You are one nice cow!'})


// test code
const createDoMagicCommand = require('./command/do-magic').createDoMagicCommand

const testDoMagic = createDoMagicCommand({
  chalk: require('chalk'),
  cowsay: {
    say({text}) {
      return `🐮  ${text}`
    }
  },
  log: console.log
})

testDoMagic({color: 'blue', message: 'Test cows everywhere!'})
