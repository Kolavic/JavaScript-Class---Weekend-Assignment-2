// While Loops

// 11. Write a while loop that prints the numbers from 1 to 10
let numbers = 1
while(numbers <= 10){
    console.log(numbers);
    numbers++
}

// 12. Write a while loop that sums all the numbers in an array.
const numberArray = [1, 2, 3, 4, 5, 6]
let sum = 0
let currentIndex = 0
while(currentIndex < numberArray.length){
    sum += numberArray[currentIndex]
    currentIndex++
}

console.log(sum);

// 13. Write a while loop that finds the largest number in an array
const numberArrayA = [11, 82, 13, 49, 56, 76]
let largestNum = 0
let currentIndex_A = 0

while(currentIndex_A < numberArrayA.length){
    if(numberArrayA[currentIndex_A] > largestNum){
        largestNum = numberArrayA[currentIndex_A]
    }
    currentIndex_A++
}

console.log(largestNum);

// 14. Write a while loop that prompts the user for input until they enter a valid email address.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let userEmail = prompt('Enter your email address:')

while (!emailRegex.test(userEmail)) {
    alert('Invalid email address. Please enter a valid email.');
    userEmail = prompt('Enter your email address:');
}

console.log('Valid email address:', userEmail);

const secretKey = "90*&^"
let userGuess = prompt("Guess")

while(userGuess !== secretKey){
    alert("Guess again")
    userGuess = prompt("Guess")
}

console.log("You guessed right");

// 15. Write a while loop that simulates a dice roll until a 6 is rolled.

let expectedNumber = 6
let diceRoll = Math.ceil(Math.random() * 6)

while(diceRoll !== expectedNumber){
    alert(`You got a ${diceRoll}. Roll the dice again`)
    diceRoll = Math.ceil(Math.random() * 6)
}

console.log(`Congrats, you got a ${diceRoll}`);