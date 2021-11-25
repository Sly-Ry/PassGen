// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptLength = window.prompt("How many characters would you like your password to be?");

  while (promptLength < 8 || promptLength > 128) {
    promptLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }

  var loCaseChar = prompt("Would you like your password to contain lowercase characters?")
  }
  var upCaseChar = prompt("Would you like your password to contain uppercase character?");
  var numChar = prompt("Would you like your password to contain numerical characters?");
  var specChar = prompt("Would you like your password to contain special characters?")
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {}