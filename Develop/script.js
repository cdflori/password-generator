// Constants & Possible Password Characters
const generateBtn = document.querySelector("#generate");
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialChar = ["!", "@", "#", "$", "%", "&", "?"]

// Functions

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // Password is currently blank! We need to make a better one

  let password = "";

  let passwordLength = parseInt(prompt("How many characters would you like your password to contain (between 8 - 128)?"));
  if (passwordLength > 128 || passwordLength < 8) {
    passwordLength = parseInt(prompt("You need more characters! Choose between 8 and 128 characters"));
  }

  const confirmUpperChar = confirm("Should your password contain upper case letters?");
  const confirmLowerChar = confirm("Should your password contain lower case letters?");
  const confirmNumber = confirm("Should your password contain numbers?");
  const confirmSpecialChar = confirm("Should your password contain special characters?");

  let possiblePassword = [];
  if (confirmUpperChar === true) {
    possiblePassword = possiblePassword.concat(alphaUpper);
  }

  if (confirmLowerChar === true) {
    possiblePassword = possiblePassword.concat(alphaLower);
  }

  if (confirmNumber === true) {
    possiblePassword = possiblePassword.concat(number);
  }

  if (confirmSpecialChar === true) {
    possiblePassword = possiblePassword.concat(specialChar);
  }

  for (var i = 0; i < passwordLength; i++) {
    password += possiblePassword[Math.floor(Math.random() * possiblePassword.length)];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);






// // Functions

// function writePassword (){

//   const password = generatePassword ();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password 

// }

// function generatePassword() {

// // starting with empty cell, creating a list of possible chars
// // input is coming from user choice

// const lengthSelection = window.prompt ("How many characters would you like your password to contain (between 8 - 128)?");
// console.log(lengthSelection)

// const addAlphaUpper = window.prompt ( "Should your password contain upper case letters?")
// console.log(addAlphaUpper);

// const addAlphaLower = window.prompt ( "Should your password contain lower case letters?")
// console.log(addAlphaLower);

// const addNumber = window.prompt ( "Should your password contain numbers?")
// console.log(addNumber);

// const addSpecialChar = window.prompt ( "Should your password contain special characters?")
// console.log(addSpecialChar);

// let password = "";

// return password;

// }







/**
//  * writes a generated password to the #password
//  */
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// /**
//  * generate a password based on certain criteria
//  */
// function generatePassword(){
// const includesChoice
//   // Password is currently blank! We need to make a better one
//   let password = "";





//   return password;
// }

// // Main Process

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
