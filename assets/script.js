// Function to generate a random password, hopefully
function generateRandomPassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";

  let password = "";
  let characterPool = "";

  var includeLowercase = confirm("Do you want lowercase letters?");
  var includeUppercase = confirm("Do you want uppercase letters?");
  var includeNumbers = confirm("Do you want numbers?");

// If statements
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumbers) {
    characterPool += numberChars;
  }

  if (characterPool === "") {
    alert("You need to select at least one character type.");
    return;
  }

  var passwordLength = prompt("Enter password length between 8 and 120 characters:");
  if (!passwordLength || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 120) {
    alert("Invalid length. Enter a number between 8 and 120.");
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};

// Add an event listener to generate button
var generateButton = document.getElementById("generate");
var passwordField = document.getElementById("password");

// Combined the event listner to also show the password, couldn't get it to write so i had to get help with this from edX and a friend that works in the field
generateButton.addEventListener("click", function() {
  var generatedPassword = generateRandomPassword();
  if (generatedPassword != null) {
    passwordField.value = generatedPassword;
  }
});
