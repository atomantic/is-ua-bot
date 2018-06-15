var botlist = require('./data/bots')
var botRegExp = new RegExp('(' + botlist.join('|') + ')', 'ig')

module.exports = function isBot(ua) {
  return !!(ua||'').match(botRegExp)
}
