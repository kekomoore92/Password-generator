// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1234567890'
var symbols = '!@#$%^&*()'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'

var characters = ''


function getRandomPassword () {
  return characters[Math.floor(Math.random() * characters.length)];
}

// console.log(getRandomPassword());

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var length = prompt('How many characters would you like? 8 - 128') 
  var upper = confirm('Do you want uppercase letters?')
  var symbol = confirm('Do you want symbols?')
  var number = confirm('Do you want numbers')
  var lower = confirm('Do you want lowercase letters?')
// console.log(generatePassword)
if (upper === true){
  characters = characters + upperCase
}
if (lower === true){
  characters = characters + lowerCase
}
if (number === true){
  characters = characters + numbers
}
if (symbol === true){
  characters = characters + symbols
}
  length = parseInt(length)
  console.log(length,typeof length)
  var password = ''
  for (var i=0; i<length; i++){
    password = password + getRandomPassword() 
  }
  return password
}