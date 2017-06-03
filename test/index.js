const chai = require("chai")
chai.should()
const isBot = require('../index')
const listBot = require('./data/bots')
const listNot = require('./data/not-bots')

describe('is-ua-bot', function () {
    describe('bots', function () {
      listBot.forEach(function(bot) {
          it('should detect (' + bot + ') as bot', function() {
              isBot(bot).should.be.true;
          });
      });
    });
    describe('not bots', function () {
      listNot.forEach(function(uaNotBot) {
          it('should not be detected (' + uaNotBot + ') as bot', function() {
              isBot(uaNotBot).should.be.false;
          });
      });
    });
});
