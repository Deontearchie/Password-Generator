// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    let passwordLength = 8

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_+"
    return values[Math.floor(Math.random() * values.length)]
    var string = ""
    retval = "";



    for (var i = 0; i < passwordLength; i++) {
        retval = password + values.charAt(Math.floor(Math.random() * value.length))
        console.log(password)

    }
    return retval;


}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = prompt("must be (8-128) character ")