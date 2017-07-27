const chalk = require('chalk')
const cowsay = require('cowsay')

const createDoMagicCommand = require('./do-magic-2')

module.exports.doMagic = createDoMagicCommand({chalk, cowsay, log: console.log})
