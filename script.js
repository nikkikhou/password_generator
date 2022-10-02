// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var possibleLowerChars = "abcdefghijklmnopqrstuvwxyz";
  var possibleUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var possibleNumericChars = "0123456789";
  var possibleSpecialChars = "!@#$%^&*()";

  var passwordLength = prompt(
    "Please choose a length of between 8-128 characters",
    8
  );
  if (isNaN(passwordLength)) {
    alert("This is not a number.");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128 characters.");
    return;
  }

  var passwordLower = confirm(
    "Should your password contain lowercase characters?"
  );
  var passwordUpper = confirm(
    "Should your password contain uppercase characters?"
  );
  var passwordNumeric = confirm(
    "Should your password contain numerical characters?"
  );
  var passwordSpecial = confirm(
    "Should your password contain special characters?"
  );

  var finalPossibleChars = "";

  if (passwordLower === true) {
    finalPossibleChars = finalPossibleChars.concat(possibleLowerChars);
  }

  if (passwordUpper === true) {
    finalPossibleChars = finalPossibleChars.concat(possibleUpperChars);
  }

  if (passwordNumeric === true) {
    finalPossibleChars = finalPossibleChars.concat(possibleNumericChars);
  }

  if (passwordSpecial === true) {
    finalPossibleChars = finalPossibleChars.concat(possibleSpecialChars);
  }

  if (finalPossibleChars.length === 0) {
    alert("You must choose an uppercase, lowercase, numerical OR symbol to proceed.")
  }

  var finalPassword = "";

  for (i = 0; i < passwordLength; i++) {
    finalPassword += finalPossibleChars[Math.floor(Math.random() * finalPossibleChars.length)];
  }

  return finalPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
