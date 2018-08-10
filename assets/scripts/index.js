'use strict'
const store = require('./store.js')
console.log('Up and running!')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// game board
const gameBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

const startGame = function () {
// game
const players = 2
let player1Wins = 0
let player2Wins = 0
let moves = 0

// players
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
store.currentPlayer = currentPlayer

  // wins logic
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X'))
  { ('#playerMessage').text('You win!')
  }

  else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O'))
  { ('#playerWinMessage').text('O wins')
  }

  // else if (gameBoard) =
  // click handler for O boxes
  function oclick (events) {
    // console.log('X')
    // console.log(events.target)
    $(events.target).text('O')
  }
  $('.gameboard').on('click', oclick)

  // click handler for x boxes
  // function xclick (events) {
  //   // console.log('X')
  //   // console.log(events.target)
  //   $(events.target).text('X')
  // }
  // $('.gameboard').on('click', xclick)

};
// console.log(startGame)

// $('.gameboard,').on('click', function () {
//   $('#0').text('X')
// })

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

// $(() => {
//
// })
