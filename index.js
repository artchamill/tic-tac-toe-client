'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

// game conditions
let players = 2
let player1Wins = 0
let player2Wins = 0

// winning box combinations
const diagonalboxes = [1, 5, 7] [3, 5, 9]
const horizontalboxes = [1, 2, 3] [4, 5, 6] [7, 8 , 9]
const verticalboxes = [1, 4, 7] [2, 5, 8] [3, 6, 9]
