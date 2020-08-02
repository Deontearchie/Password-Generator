// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

        
    // let passwordLength = document.getElementById("slider").value;

        
    let passwordLength = prompt("Enter the length of your password: (Must be between 8 and 128 Char)")

    if (confirm("Would you like a Uppercase Character in your password?")) {

    }
    if (confirm("Would you like a lowercase Character in your password?")) {

    }
    if (confirm("Would you like a Number in your password?")) {

    }
    if (confirm("Would you like a special Character in your password?")) {

    }

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_+"    
        // let valuesUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789";    
        // let valuesLower = "abcdefghijklmnopqrstuvwxyz";    
        // let valuesNum = "1234567890";    
        // let valuesSpec = "!@#$%^&*_+";    

        
    let password = "";

        
    for (i = 0; i <= passwordLength; i++) { 
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));    
    }    
    alert(password)
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