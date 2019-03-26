'use strict'
const assert = require('chai').assert
const isBot = require('../index')
const listBot = require('./data/bots')
const listNot = require('./data/not-bots')
const bots = require('../data/bots')

describe('is-ua-bot', function () {
    describe('bots', function () {
      listBot.forEach(function(bot) {
          it('should detect (' + bot + ') as bot', function() {
            assert.isTrue(isBot(bot))
          })
      })
    })
    describe('not bots', function () {
      listNot.forEach(function(uaNotBot) {
          it('should not be detected (' + uaNotBot + ') as bot', function() {
            assert.isFalse(isBot(uaNotBot))
          })
      })
    })
    describe('no regex searches that are supersets of other matches', function () {
        it('should not have duplicated terms', function() {
            bots.forEach(function(subSearch, i) {
                bots.forEach(function(superSearch, j) {
                    if(subSearch===superSearch){
                        assert(i===j, `duplicate search term: ${subSearch}  at ${i} and ${j}`)
                        return
                    }
                    assert.isFalse(new RegExp(subSearch, 'ig').test(superSearch), `"${superSearch}" is a superset match for "${subSearch}"`)
                })
            })
        })
    })
})
