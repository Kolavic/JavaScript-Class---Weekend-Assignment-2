// Rest Parameters
// 21. .Define a function that accepts any number of arguments using rest parameters.

function restFunction(...userInput){
    return console.log(...userInput);
}

restFunction("Java", "Script", 2024, "Is", "A", "Banger")

// 22. Use rest parameters to create a function that calculates the average of a list of numbers.
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return console.log(average);
}

calculateAverage(2, 4, 6, 8, 10);

// 23. .Use rest parameters to create a function that logs all the arguments passed to it.
function logParameters(...userInput){
    return console.log(...userInput);
}

logParameters("Here", "Are", "Elements")

// 24. Use rest parameters to create a function that combines multiple arrays into a single array.
const array1 = [1, 2, 3]
const array2 = ['a', 'b', 'c']

function combineArrays(...arrays) {
    return arrays.reduce(function (combinedArray, currentArray) {
        return combinedArray.concat(currentArray);
    }, []);
}

console.log(combineArrays(array1, array2))

// 25. Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object.
const objectA = {name: "Sam", age: 12, class: 4}
const objectB = {iD: 5678, status: "Active"}
const objectC = {premium: true, sub: false, subType: "Level 4"}

function mergedObjects(...objects) {
    return objects.reduce(function (mergedObject, currentObject) {
        return { ...mergedObject, ...currentObject };
    }, {});
}

const mergedObject = mergedObjects(objectA, objectB, objectC);
console.log('Merged Object:', mergedObject);