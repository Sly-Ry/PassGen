// Assignment code here

// Character Arrays
// lowercase alpha
lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

// uppercase alpha
upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

// numbers
number = [1,2,3,4,5,6,7,8,9,0];

// special characters
symbol = ['"','`','~','!','@','#','$','%','^','&','*','(',')','[',']','{','}','-','_','=','+',';',':',"'",',','.','<','>','?','/','"'];

// variable that will hold confirmed characters
var passContain;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write a function for generatePassword
function generatePassword() {
  // ask user how long they want their password to be
  plength = parseInt(prompt("How many characters would you like your password to be?"));
  
  // make sure their password length fits criteria
  if (plength < 8 || plength > 128) {
    plength = alert("Length must be 8-128 characters.");
  }
  else if (!plength) {
    alert("You gots to enter a number!");
  } 
  else {
    cLowers = confirm("You want your password to contain Lowercase characters?");
    cUppers = confirm("You want your password to contain Uppercase characters?");
    cNumbs = confirm("You want your password to contain Numerical characters?");
    cSyms = confirm("You want your password to contain Special characters?");
  }
  
  // if all are picked
  if (!cLowers && !cUppers && !cNumbs && !cSyms) {
    passContain = alert("You gotta pick one criteria for your password!");
  }
  
  else if (cLowers && cUppers && cNumbs && cSyms) {
    passContain = lower.concat(upper, number, symbol);
  }
  // if only three are picked
  else if (cLowers && cUppers && cNumbs) {
    passContain = lower.concat(upper, number);
  }
  else if (cLowers && cUppers && cSyms) {
    passContain = lower.concat(upper, symbol);
  }
  else if (cLowers && cNumbs && cSyms) {
    passContain = lower.concat(number, symbol);
  }
  else if (cUppers && cNumbs && cSyms) {
    passContain = upper.concat(number, symbol);
  }
  // if only two are picked
  else if (cLowers && cUppers) {
    passContain = lower.concat(upper);
  }
  else if (cLowers && cNumbs) {
    passContain = lower.concat(number);
  }
  else if (cLowers && cSyms) {
    passContain = lower.concat(symbol);
  }
  else if (cUppers && cNumbs) {
    passContain = upper.concat(number);
  }
  else if (cUppers && cSyms) {
    passContain = upper.concat(symbol);
  }
  else if (cNumbs && cSyms) {
    passContain = number.concat(symbol);
  }
  // if only one is picked
  else if (cLowers) {
    passContain = lower;
  }
  else if (cUppers) {
    passContain = upper;
  }
  else if (cNumbs) {
    passContain = number;
  }
  else if (cSyms) {
    passContain = symbol;
  }
  
  // create a var that will hold an array of random characters
  var rdmPass = [];

  // creates the randomness of the password that will go in rdmPass var
  for (i = 0; i < plength; i++) {
    newPass = passContain[Math.floor(Math.random() * passContain.length)];
    
    // pushes the random elements to the rdmPass var
    rdmPass.push(newPass)
  }
  
  var passwyrd = rdmPass;

  return passwyrd; 
  
};

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password"); 
  
  passwordText.value = generatePassword();
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)