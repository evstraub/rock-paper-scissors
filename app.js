//rock paper scissors
const myArray = ["Rock", "Paper", "Scissors"];

function computerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(computerChoice());