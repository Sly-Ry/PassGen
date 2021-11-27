// Assignment code here

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passLength = window.prompt("How many characters would you like your password to be?");
    
  while (passLength < 8 || passLength > 128) {
    passLength = alert("Length must be 8-128 characters.");
    return writePassword();
  }
  
  var lo = confirm("Would you like your password to contain lowercase characters?");   
  var up = confirm("Would you like your password to contain uppercase character?");    var num = confirm("Would you like your password to contain numerical characters?");    var spec = confirm("Would you like your password to contain special characters?");
      
  while (!(lo && up && num && spec)) {
    alert("You must include at least one type of character.")
    return writePassword();
  }

  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = generatePassword(lo, up, num, spec, passLength);

};

var lower = rdmLower;
var upper = rdmUpper;
var number = rdmNum;
var special = rdmSpec;

function generatePassword(length) {
  let generatePassword = '';
  var typesCount = lower() + upper() + number() + special();
  var typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatePassword += randoChar[funcName]();
    });
  }

  var finalPassword = generatePassword.slice(0, length);

  return finalPassword;
};

function rdmLower() {
  return Math.random("qwertyuiopasdfghjklzxcvbnm")
}

function rdmUpper() {
  return Math.random("QWERTYUIOPASDFGHJKLZXCVBNM")
}

function rdmNum() {
  return Math.random("1234567890")
}

function rdmSpec() {
  return  Math.random("`~!@#$%^&*()[]{}-_=+;:',.<>?/")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)