const name = prompt("Type your name.")

const number = Math.floor(Math.random() * 4);

let house;

if (number === 0) {
  house = 'Gryffindor';
} else if (number === 1) {
  house = 'Slytherin';
} else if (number === 2) {
  house = 'Hufflepuff';
} else {
  house = 'Ravenclaw';
}

document.querySelector("#house").innerHTML = 
name + ", you are " + house + ".";