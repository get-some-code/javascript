// function greeting(){
//     console.log("Good Morning!");
// }

// greeting()

// //another way
// const greet = function(){
//     console.log("Good Morning again!");
// }
// greet()

// function addNumbers(num1,num2){
//     return num1+num2;
// }
// console.log(addNumbers(2,3));

// rest operator
// function addNumbers(...num){
//     let sum = 0;
//     for (let n of num){
//         sum += n;
//     }
//     return sum;
// }

// console.log(addNumbers(3,4,7,87,6,5));
// console.log(addNumbers(6,5));

// spread operator
// const arr = [10,20,30,40,50];
// const [first,second,...num] = arr; 

// console.log(first,second,num);

// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [38, 70, 87, 56];
// const ans = [...arr1, ...arr2];
// console.log(ans);

// arrow function

// const addNumber = (num1,num2)=>{
//     console.log(num1+num2);
// }

// addNumber(3,5);

// arrow implicit return
// const addNumber = (num1,num2) => num1+num2;
// console.log(addNumber(5,3));

// arrow single parameter
// const squareNumber = (num) => num**2;
// console.log(squareNumber(4));

// if we have only one number , we can also ignore the brackets ()!
// const squareNumber = num => num**2;
// console.log(squareNumber(4));

// const greet = () => {
//     return {
//         name: "Monideep",
//         age: 19
//     }
// }
// console.log(greet());

// also
// const greet = () => ({name: "Monideep",age: 19})
// console.log(greet());

// IIF - Immediately Invoked Function - no need to invoke after defining the function. it will invoke itself automatically after being defined.
// (function greet(){
//      console.log("Good Morningggg!!!!"); 
// })();

//// CALLBACK FUNCTION //// -> gives reusability 
function greet (){
    console.log("HEllo jiii, kaise ho!");
}

function meet(callback){
    console.log("I am gonna meet someone!");
    callback()
}

meet(greet);
