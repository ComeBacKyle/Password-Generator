// This is what characters will be allowed in the password

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "#", "$", "%", "&", "@", "?"];

var decision;

var first;
var userNmber;
var userChar;
var userUpper;
var userLower;


funtion writePassword(event) {
    event.preventDefault();

    first = parseInt(prompt("How long would you like your password to be?"));

    if (!first) {
        alert("This requires an answer");
    } else if (first < 8 || first > 20) {
        first = parseInt(prompt("Password must be between 8 and 20 characters"));
        return
    } else {
        userNumber = confirm("Shall we include numbers?");
        userChar = confirm("Shall we include special characters?");
        userUpper = confirm("Shall we include uppercase letters?");
        userLower = confirm("Shall we include lowercase letters?");
    }
    if (userNumber && userChar && userUpper && userLower) {
        decision = upperCase.concat(lowerCase, numbers, specialChar);
    }
    else if (userNumber && userChar && userUpper) {
        decision = lowerCase.concat(numbers, specialChar);
    }

    else if (userNumber && userUpper && userLower) {
        decision = upperCase.concat(lowercase, numbers);
    }

    else if (userChar && userUpper && userLower) {
        decision = upperCase.concat(lower, specialChar);
    }

    else if (userNumber && userChar) {
        decision = numbers.concat(specialChar);
    }

    else if (userNumber & userUpper) {
        decision = upperCase.concat(numbers);
    }

    else if (userNumber && userLower) {
        decision = numbers.concat(lowerCase);
    }

    else if (userUpper && userUpper) {
        decision = upperCase.concat(specialChar);
    }

    else if (userLower && userChar) {
        decision = lowerCase.concat(specialChar);
    }

    else if (userUpper && userLower) {
        decision = upperCase.concat(lowerCase);
    }

    else if (userUpper) {
        decision = upperCase;
    }

    else if (userLower) {
        decision = lowerCase;
    }

    else if (userChar) {
        decision = specialChar;
    }

    else if (userNmber) {
        decision = numbers;
    }

    var values = [];

    for (var i = 0; i <= first; i++) {
        userChoices = decision[Math.floor(Math.random() * Math.floor(decision.length + 1))];
        values.push(userChoices);
    }

    var password = values.toString();

    var passwordText = document.querySelector("#password").textContent = password;

    passwordText.values = password;

};


generateBtn.addEventListener("click", writePassword);