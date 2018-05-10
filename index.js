const botlist = require('./data/bots')
const botRegExp = new RegExp('(' + botlist.join('|') + ')', 'ig')

module.exports = function isBot(ua) {
  return !!(ua||'').match(botRegExp)
}
