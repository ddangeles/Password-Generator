var special = [
"!",
"?",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")"
]
var numeric = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]
var lowerCased = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
var upperCased = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]

function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain"),10);

  if(Number.isNaN(length)) {
    alert("Password length must be a provided as a number");
  }

  if(length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  if(length > 128) {
    alert("Password length must be less than 129 characters");
    return null;
  }

  var hasSpecialCharacters = confirm (
    "Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm (
    "Click OK to confirm including numeric characters"
  )

  var hasLowerCasedCharacters = confirm (
    "Click OK to confirm including lowercase characters"
  )

  var hasUpperCasedCharacters = confirm (
    "Click OK to confirm including uppercase characters"
  )

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false 
  ) {
    alert("Must select at least one character type");
    return null
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  }

  return passwordOptions;

}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;

}


function generatePassword() {
  var options = getPasswordOptions ();
  var results = []

  var possible = []

  var guaranteed = [];

  if(!options) return null;

  if (options.hasSpecialCharacters){
    possible = possible.concat(special)
    guaranteed.push(getRandom(special));
  }

  if (options.hasNumericCharacters){
    possible = possible.concat(numeric)
    guaranteed.push(getRandom(numeric));
  }

  if (options.hasLowerCasedCharacters){
    possible = possible.concat(lowerCased)
    guaranteed.push(getRandom(lowerCased));
  }

  if (options.hasUpperCasedCharacters){
    possible = possible.concat(upperCased)
    guaranteed.push(getRandom(upperCased));
  }

  for(var index = 0; index < options.length; index++){
    var possible = getRandom(possible);

    results.push(possible);
  }

  for(var index = 0; index < guaranteed.length; index++){
    results[index] = guaranteed[index];
  }

  return results.join("")

}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
