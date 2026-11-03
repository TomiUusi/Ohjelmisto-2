"use strict";

const num1 = Number(prompt("Type 1st number."));
const num2 = Number(prompt("Type 2nd number."));
const num3 = Number(prompt("Type 3rd number."));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector("#sum").innerHTML = 
"Sum: " + sum;
document.querySelector("#product").innerHTML = 
"Product: " + product;
document.querySelector("#average").innerHTML = 
"Avergae: " + average;