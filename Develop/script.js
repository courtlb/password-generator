// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var upper;
var lower;
var number;
var special;
var types;

function passwordLength() {
  length = prompt("Please enter a password length between 8 and 128 characters");
  //if statement here about if they don't fulfill criteria, execute passwordLength again
  if (length < 8 || length > 128) {
    alert("You did not enter a valid length!");
    passwordLength();
  }
  console.log(length);
  return length;
};

function characterTypes() {
  //confirm prompts for each 4 character types, must select at least one or it loops to beginning, store choices in variables and return them
  lower = confirm("Would you like your password to include lowercase characters?");
  upper = confirm("Would you like your password to include uppercase characters?");
  number = confirm("Would you like your password to include numbers?");
  special = confirm("Would you like your password to include special characters?");

  if (lower === false && upper === false && number === false && special === false) {
    alert("You must select at least one character type for your password!");
    characterTypes();
  }

  return types = {
    lower,
    upper,
    number,
    special,
  }
};

function generatePassword() {
  //this is where all the logic will be
  var length = passwordLength();
  var types = characterTypes();
  var password = "";
  var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
    
  var passwordGenArray = [];

  if (types.lower === true) {
      passwordGenArray = passwordGenArray.concat(lowercaseLettersArray);
  };
  if (types.upper === true) {
    passwordGenArray = passwordGenArray.concat(uppercaseLettersArray);
  };
  if (types.number === true) {
    passwordGenArray = passwordGenArray.concat(numbersArray);
  };
  if (types.special === true) { 
    passwordGenArray = passwordGenArray.concat(specialCharactersArray);
  };

  for (i=0; i < length; i++) {
    password = password + passwordGenArray[Math.floor(Math.random()*passwordGenArray.length)];
  };

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
