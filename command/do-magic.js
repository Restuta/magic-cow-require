const createDoMagicCommand = ({chalk, cowsay, log}) =>
  function doMagicCommand({ color, message }) {
    const whatCowSays = cowsay.say({
      text: message,
      e: '👀',
      T: '👅'
    })
    log(chalk[color](whatCowSays))
  }


const chalk = require('chalk')
const cowsay = require('cowsay')


module.exports = {
  createDoMagicCommand,
  doMagic: createDoMagicCommand({chalk, cowsay, log: console.log})
}
