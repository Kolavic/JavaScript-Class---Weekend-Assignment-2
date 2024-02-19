// Object Literals
// 26. Create an object literal representing a person with properties for name, age, and address.
const personBio = {
    name: "Kolavic Kay",
    age: 21,
    address: "16, Kolavic Street, Lagos Nigeria"
}

console.log(personBio);

// 27. Access the name property of the person object.
console.log(personBio.name);

// 28. Change the value of the age property.
personBio.age = 22
console.log(personBio);

// 29. Add a new property to the object called "email"
personBio.email = "kolavic@mail.com"
console.log(personBio);

// 30. Delete the address property from the object.
delete personBio.address
console.log(personBio);