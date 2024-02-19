// ForEach Method

// 16. Use the forEach method to print each element of an array.
const elementArrayA = ["Dan", "Sam", "Tam", 8297, 4560]
elementArrayA.forEach(function (fetchElement){
    console.log(fetchElement);
})

// 17. Use the forEach method to double each element of an array.
const elementArrayB = [8297, 4560, 4569, 7822]
elementArrayB.forEach(function (element, index, array){
    array[index] = element * 2
})
console.log(elementArrayB);

// Using strings
const wordArrayB = ["Pam", "Dan", "Sam"]
wordArrayB.forEach(function(element, index, array){
    array[index] = `${element + element}`
})
console.log(wordArrayB);

// 18. Use the forEach method to create a new array containing only the strings from a mixed array. 
const mixedArray = ["Dan", 9875, "Sam", "Tam", 8297, 4560]
const stringArray = []

mixedArray.forEach(function(element){
    if (typeof element === "string"){
        stringArray.push(element)
    }
})
console.log(stringArray);

// 19. Use the forEach method to find the sum of all even numbers in an array.
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
numberArray.forEach(function(element){
    if (element % 2 === 0) {
        sum += element
    }
})
console.log(sum);

// 20. Use the forEach method to filter an array based on a certain condition

// An array with names more than 4 characters
const elementArrayC = ["Paul", "Silas", "Peter", "John", "Jude", "Simon"]
const newArray = []

elementArrayC.forEach(function(element){
    if (element.length > 4) {
        newArray.push(element)
    }
})

console.log(newArray);
