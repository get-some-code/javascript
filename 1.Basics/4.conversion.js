// Conversions

let score = 33
console.log(typeof score);

score = "33"
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

score = "33abc"
console.log(typeof(Number(score)));
console.log(Number(score));
console.log(null);

let loggedIn = true
loggedIn = 1
console.log(Boolean(loggedIn));

loggedIn = 0
console.log(Boolean(loggedIn));

let number = 33
let stringNumber = String(number)

console.log(typeof stringNumber);

// Operations

let value = 3
let negValue = -value

console.log(negValue);

let str1 = "Hello"
let str2 = "World"

let str3 = str1+str2
let str4 = str1+" "+str2

console.log(str3);
console.log(str4);


console.log("1"+2);
console.log(1+"2");
console.log("2"+"1");
console.log("1"+2+2);
console.log(1+2+"3");


let counter = 100
counter++

console.log(counter);



