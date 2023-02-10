// Assignment Code
//stores button element in variable for event listener reference
var generateBtn = document.querySelector("#generate");
var passLength;
var includeLower;
var includeUpper;
var includeNum;
var includeSpecial;
var possibleChars = "";



//generate random password to fit parameters
var generatePassword = function() {
    passLength = window.prompt("How many characters should the password contain?");
    console.log(passLength)
    if (isNaN(passLength)) {
      window.alert("That's not a valid length. Pick a number between 8-128 next time")
      return;
    }
    else if (passLength < 8) {
      window.alert("Length must be at least 8 characters and no more than 128 characters")
      return;
    }
    else if (passLength > 128) {
      window.alert("Length must be more than 8 characters but less than 128 characters")
      return;
    }

    includeLower = confirm("Include lowercase letters? Press OK for yes, cancel for no")
    // console.log(includeLower)

    includeUpper = confirm("Include uppercase letters? Press OK for yes, cancel for no")
    //console.log(includeUpper)

    includeNum = confirm("Include numbers? Press OK for yes, cancel for no")
    //console.log(includeNumb)

    includeSpecial = confirm("Include special characters? Press OK for yes, cancel for no")
    //console.log(includeSpecial)

    if (includeLower) {
      possibleChars = possibleChars.concat("abcdefghijklmnopqrstuvwxyz")
    }
    if (includeUpper) {
      possibleChars = possibleChars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if (includeNum) {
      possibleChars = possibleChars.concat("1234567890")
    }
    if (includeSpecial) {
      possibleChars = possibleChars.concat("\\\"!#$%&'()*+,-./:;<=>?@[]^_`{|}~")
    }
    // console.log(possibleChars.length) 
    // console.log(possibleChars)

    var password = '';
    for (i=0; i<passLength; i++) {
      password = password.concat(possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)))
    }

    return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt for password length
//validate that it is at least 8 characters and no more than 128
//prompt to include lowercase, validate
//prompt to include uppercase, validate
//prompt to include numbers, validate
//prompt to include special characters, validate



//display password innerhtml
