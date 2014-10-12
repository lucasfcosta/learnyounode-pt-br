#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')
    , menu        = require('./exercises/menu')

    , name        = 'learnyounode'
    , title       = 'APRENDA O NODE.JS PARA A MAIS PLENA VITÓRIA!'
    , subtitle    = '\x1b[23mEscolha um exercício e pressione \x1b[3mEnter\x1b[23m para começar'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , menuItems   : [ {
        name    : 'Créditos'
      , handler : credits
    } ]
})
