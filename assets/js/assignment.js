// Assignment code here
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var specials = "`~!@#$%^&*()[]{}-_=+;:',.<>?/";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passLength = window.prompt("How many characters would you like your password to be?");
  
  while (passLength < 8 || passLength > 128) {
    passLength = alert("Length must be 8-128 characters.");
    return writePassword();
  }
  
  // the var "password" calls the func "generatePassword".
  var password = generatePassword();

  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;  


};

function generatePassword() {
  var newPass = "";

  var lo = confirm("Would you like your password to contain lowercase characters?");
  if (lo) {
    newPass += lowers.charAt(Math.random() * lowers.length);
  }
  
  var up = confirm("Would you like your password to contain uppercase character?");
  if (up) {
    newPass += uppers.charAt(Math.random() * uppers.length);
  }

  var num = confirm("Would you like your password to contain numerical characters?");
  if (num) {
    newPass += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  var spec = confirm("Would you like your password to contain special characters?");
  if (spec) {
    newPass += specials.charAt(Math.random() * specials.length);
  }
  
  while (newPass == "" || newPass == null) {
    alert("You must include at least one type of character.")
    return generatePassword();
  }

  return newPass;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);