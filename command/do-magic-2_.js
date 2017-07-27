const createDoMagicCommand = ({chalk, cowsay, log}) =>
  function doMagicCommand({ color, message }) {
    const whatCowSays = cowsay.say({
      text: message,
      e: '👀',
      T: '👅'
    })
    log(chalk[color](whatCowSays))
  }

module.exports = createDoMagicCommand
