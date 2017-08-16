#!/usr/bin/env node
'use strict'
const meow = require('meow')
const findPi = require('find-pi')

const cli = meow(`
  Usage
    $ find-pi

  Example
    $ find-pi
    192.168.1.2
`)

findPi(cli)
  .then(res => console.log(res))
  .catch(err => console.error(err))
