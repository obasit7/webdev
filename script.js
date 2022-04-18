
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var userAge = prompt("What is your Age?");
alert("Nice to meet you, " + firstName + " " + lastName);

var fullName = firstName + " " + lastName
console.log("Your fullname is " + fullName);
console.log("You are " + userAge + " years old");

var Day = userAge * 365
alert(userAge + " years is roughly " +Day+ " days");

if (userAge < 0) {
    alert ("Age is not valid");
}

if (userAge === 21) {
    alert ("happy 21st bday");
}

if ((userAge % 2) !== 0) {
    alert ("your age is odd");
}

