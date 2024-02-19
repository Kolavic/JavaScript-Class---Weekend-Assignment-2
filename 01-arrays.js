// Arrays

// 1. Create an array containing the numbers 1 to 10.
const numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Access the third element of the array.
console.log(numberArrays[2])

// 3. Change the value of the last element to 0.
numberArrays[9] = 0
console.log(numberArrays)

// 4. Add a new element to the end of the array.
numberArrays.push(11)
console.log(numberArrays)

// 5. Remove the first element from the array.
numberArrays.shift()
console.log(numberArrays)

// 6. Find the index of the number 5 in the array.
console.log(numberArrays.indexOf(5))

// 7. Check if the array contains the number 8.
console.log(numberArrays.includes(8))

// 8. Reverse the order of the elements in the array.
console.log(numberArrays.reverse())

// 9. Sort the array in ascending order.
numberArrays.sort(function (a, b){
    return a - b
})
console.log(numberArrays)

// Descending order
numberArrays.sort(function(a, b){
    return b - a
})
console.log(numberArrays)

// 10. Create a new array containing only the even numbers from the original array
evenNumbersArray = numberArrays.filter(function (numberArrays){
    return numberArrays % 2 === 0
})

console.log(evenNumbersArray)

// Odd numbers
oddNumbersArray = numberArrays.filter(function (numberArrays){
    return numberArrays % 2 !== 0
})
console.log(oddNumbersArray)