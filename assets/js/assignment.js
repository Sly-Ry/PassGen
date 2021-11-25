// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passLength = window.prompt("How many characters would you like your password to be?");
  
  while (passLength < 8 || passLength > 128) {
    passLength = alert("Length must be 8-128 characters.");
  }
  
  // the var "password" calls the func "generatePassword".
  var password = generatePassword();

  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;  


};

function generatePassword () {
  var newPass = "";

  var lo = confirm("Would you like your password to contain lowercase characters?");
  var up = confirm("Would you like your password to contain uppercase character?");
  var num = confirm("Would you like your password to contain numerical characters?");
  var spec = confirm("Would you like your password to contain special characters?");

  while (!lo || !up || !num || spec) {
    alert("You must pick one character!")

    return generatePassword()
  }


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);