// For Loops
// 31. Write a for loop that prints the numbers from 1 to 10.

for(let i = 1; i <=10; i++){
    console.log(i);
}

// 32. Write a for loop that sums all the numbers in an array.
const numberArray = [62, 298, 2, 29, 18, 15]
let sum = 0

for (let i = 0; i < numberArray.length; i++){
    sum += numberArray[i]
}

console.log(sum)


// 33. Write a for loop that finds the largest number in an array.
const numberArrayA = [62, 298, 2, 29, 98, 715]
let largestNumber = numberArray[0]

for (let i = 0; i < numberArrayA.length; i++){
    if(numberArrayA[i] > largestNumber){
        largestNumber = numberArrayA[i]
    }
}

console.log(largestNumber);


// 34. Write a for loop that creates a new array containing the squares of the numbers in another array.
const numberArrayB = [2, 3, 4, 5, 6]
const squaredArray = []

for (let i = 0; i < numberArrayB.length; i++) {
    const squaredElement = Math.pow(numberArrayB[i], 2)
    squaredArray.push(squaredElement)
}

console.log(squaredArray);


// 35. Write a for loop that iterates over an object's properties and values.
const objectArray = [
    {name: "Sam", age: 12, class: 4},
    {name: "Dan", age: 16, class: 6},
    {name: "Eve", age: 9, class: 2},
] 

for (let i = 0; i < objectArray.length; i++){
    let fetchData = objectArray[i]
    console.log(`Name: ${fetchData.name}, Age: ${fetchData.age}, Class: ${fetchData.class}`)
}