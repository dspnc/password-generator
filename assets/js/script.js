// Assignment Code
//stores button element in variable for event listener reference
var generateBtn = document.querySelector("#generate");

//stores user input for password length
var passLength;

//stores user input for including lowercase letters
var includeLower;

//stores user input for including uppercase letters
var includeUpper;

//stores user input for including numbers
var includeNum;

//stores user input for including special characters
var includeSpecial;

//creates an empty string variable for the possible characters to include
var possibleChars = "";



//generate random password to fit parameters
var generatePassword = function() {
    passLength = window.prompt("How many characters should the password contain?");
    //console.log(passLength)

    //checks if input is a number. if not, alert user and return to end function
    if (isNaN(passLength)) {
      window.alert("That's not a valid length. Pick a number between 8-128 next time")
      return;
    }
    //checks to make sure input is between 8 and 128. if not, alert user and return to end function
    else if (passLength < 8) {
      window.alert("Length must be at least 8 characters and no more than 128 characters")
      return;
    }
    else if (passLength > 128) {
      window.alert("Length must be more than 8 characters but less than 128 characters")
      return;
    }

    //creates confirm messages for user to select OK or cancel to include or exclude the specified character type
    //stores boolean for each character type
    includeLower = confirm("Include lowercase letters? Press OK for yes, cancel for no")
    // console.log(includeLower)
    includeUpper = confirm("Include uppercase letters? Press OK for yes, cancel for no")
    //console.log(includeUpper)
    includeNum = confirm("Include numbers? Press OK for yes, cancel for no")
    //console.log(includeNumb)
    includeSpecial = confirm("Include special characters? Press OK for yes, cancel for no")
    //console.log(includeSpecial)

    //checks character-type boolean vars and adds them to the possibleChars string if true
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

    //creates local password string variable that is empty
    var password = '';
    //loops specified passLength number of times, and adds random characters from possibleChars to the local password string
    //by concatenating the next charAt with (Math.random * possibleChars.length) to find a random possibleChar
    for (i=0; i<passLength; i++) {
      password = password.concat(possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)))
    }

    //returns the finished password
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


