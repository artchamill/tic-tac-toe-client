const store = require('./store.js')

const signUpSuccess = function () {
  $('#message').text('Successfully registered!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
}

const signUpFail = function () {
  $('#message').text('Sign-up failed. Check that your passwords match.')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully Signed-In!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
  store.user = response.user
  console.log('store', store)
}

const signInFail = function () {
  $('#message').text('Sign-in failed. Check that your email and password are correct')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully Changed Password!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
  console.log('store', store)
}

const changePasswordFail = function () {
  $('#message').text('Password change failed please check password')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
  console.log('store', store)
}

const signOutFail = function () {
  $('#message').text('Sign out failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutFail,
  signOutSuccess
}
