// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialCharacters = "!@#$%^&*()";


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var criteria = prompt("Must have 8 characters less than 128 must have an Upper and Lower case letter and must have a special character")

    var Lowercase = confirm("Would you like to have an lowercase letter in your password?")

    var Number = confirm("Would you like to have numbers in your password?")

    var specialC = confirm("would you like to have special chararcters in your password?")

    var passwordlength = prompt("Password must be atleast 8 characters and less than 128 characters ")

    var characterType = prompt("Special characters must be included")
}