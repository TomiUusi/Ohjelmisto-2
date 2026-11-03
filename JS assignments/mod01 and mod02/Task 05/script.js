"use strict";

const year = Number(prompt("Type a year"))

if (year % 400 === 0) {
    document.querySelector("#leap_year").innerHTML = 
    "This is a leap year.";
} else if (year % 100 === 0) {
    document.querySelector("#leap_year").innerHTML = 
    "This is not a leap year."
} else if (year % 4 === 0) {
    document.querySelector("#leap_year").innerHTML = 
    "This is a leap year."
} else {
    document.querySelector("#leap_year").innerHTML = 
    "This is not a leap year."
}

