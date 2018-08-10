'use strict'
console.log('Up and running!')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// game board
const gameBoard = [
  ['X ', ' X', 'X '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

// wins logic
if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X')) {
  ('#playerMessage').text('You win!')
}

if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
  ('#playerWinMessage').text('O wins')
}

const startGame = function () {
const players = 2
let player1Wins = 0
let player2Wins = 0
let moves = 0
}

// players
// const player1 = 'x'
// const player2 = 'o'

// player moves
// const playerMoves = {
//   'x': [],
//   'o': []
// }

// winning box combinations array
// const winningCombinations = [
// // horizontalWins
//   [0, 1, 2], [3, 4, 5], [6, 7, 8],
// // verticalWins
//   [0, 3, 6], [1, 4, 7], [2, 5, 8]
//   // diagonalWins
//     [0, 4, 6], [2, 4, 8],
// ]

// check for win function
// const checkForWin = function () {
//   winningCombinations.forEach(function (element) {
//     console.log(element)
//   // insert winningCombinations.every here
//   })
  // console.log(checkForWin())
  // if (winningCombinations === [0, 4, 6], [2, 4, 8],
  //   [0, 1, 2], [3, 4, 5], [6, 7, 8],
  //   [0, 3, 6], [1, 4, 7], [2, 5, 8]) {
  //   alert('You win!')
  // } else {
  //   alert('Sorry. Try Again')
  // }
// }
function click (events) {
  console.log('X')
  // events.target
  console.log(events.target)
  $(events.target).text('X')
}
// click handler for boxes
$('.gameboard').on('click', click)

// $(() => {
//
// })
