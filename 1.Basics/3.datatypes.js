// alert("Hello") //cannot use this as we are using nodejs not browser

let name = "Moniii" //string
let age = 19 //integer
let isLoggedIn = true //boolean

// number => 2 ^ 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value (representation of an empty value)
// undefined => no value is assigned
// symbol => unique


// object

console.log(typeof "moniii");
console.log(typeof null); //object
console.log(typeof undefined); //undefined


// -------------------------- Datatypes Summary -------------------------- //

// Primitive - 7 Types: 
// string, number, boolean, null, undefined, symbol, bigint

// BigInt:
const number = 154987768743186767831687878n

// SYMBOL: 
const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1==id2);
console.log(id1===id2);



// Non-Primitive (Reference):
// array, objects, functions

// array:
const arr1 = [1,2,3,4,5];

// object:
let obj1 = {
    "name": "Moniii",
    "age": 19
}

// function:
const myfunction = function(){
    console.log("Hello World!");
}

// Note: JavaScript is dynamically typed language
