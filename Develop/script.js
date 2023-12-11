// Assignment code here
var password = "";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+`~|{}[];:/?.,<>-=";

var passwordLength = parseInt(prompt("Enter length of password. Must be at least 8 characters"));
var passwordUpperCase = window.confirm("include uppercase letters?");
var passwordLowerCase = window.confirm("Include lowercase letters?");
var passwordSpecialCharacters = window.confirm("Include special characters?");
var passwordNumbers = window.confirm("Include numbers?");
 

let generatedPassword = "";
if (passwordLowerCase) {
  generatedPassword += lowercaseLetters;
}
if (passwordUpperCase) {
  generatedPassword += uppercaseLetters;
}
if (passwordNumbers) {
  generatedPassword += numbers;
}
if (passwordSpecialCharacters) {
  generatedPassword += specialCharacters;
}

function generateRandomPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * generatedPassword.length);
    password += generatedPassword[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  passwordLength = parseInt(prompt("Enter length of password. Must be at least 8 characters"));
  passwordUpperCase = window.confirm("Include uppercase letters?");
  passwordLowerCase = window.confirm("Include lowercase letters?");
  passwordSpecialCharacters = window.confirm("Include special characters?");
  passwordNumbers = window.confirm("Include numbers?");

  password = generateRandomPassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}