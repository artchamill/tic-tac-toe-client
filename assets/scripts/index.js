'use strict'
console.log("Up and running!");
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // game board
  const board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']
})
// game conditions
const players = 2
let player1Wins = 0
let player2Wins = 0
let moves = 0

// players
const player1 = 'x'
const player2 = 'o'

// player moves
const playerMoves = {
  'x': [],
  'o': []
}

// winning box combinations array
const winningCombinations = [
// diagonalWins
  [0, 4, 6], [2, 4, 8],
// horizontalWins
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
// verticalWins
  [0, 3, 6], [1, 4, 7], [2, 5, 8]
]

// check for win function
const checkForWin = function () {
  winningCombinations.forEach(function (element) {
    console.log(element)
  // insert winningCombinations.every here
  })
  // if (winningCombinations === [0, 4, 6], [2, 4, 8],
  //   [0, 1, 2], [3, 4, 5], [6, 7, 8],
  //   [0, 3, 6], [1, 4, 7], [2, 5, 8]) {
  //   alert('You win!')
  // } else {
  //   alert('Sorry. Try Again')
  // }
}
//click handler for boxes

$('.gameboard').on('click', '.box', function (event) {
  const $id = $(event.currentTarget)
  $box.addClass('xmove')
})

console.log(checkForWin())
