'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

// game board
const board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']

// game conditions
let players = 2
let player1Wins = 0
let player2Wins = 0
let moves = 0

// players
const player1 = 'x'
const player2 = 'o'

// winning box combinations
const diagonalBoxes = [1, 5, 7] [3, 5, 9]
const horizontalBoxes = [1, 2, 3] [4, 5, 6] [7, 8 , 9]
const verticalboxes = [1, 4, 7] [2, 5, 8] [3, 6, 9]


const checkForWin = function() {
	if (diagonalBoxes[] === ) {
		alert("You win!")
	} else {
		alert("Sorry. Try Again");
	}
}
