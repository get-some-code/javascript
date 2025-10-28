// Scopes => Global, Functional and Block - level

// let a = 10; // Global scope
// let b = 20; // Global scope

// if (true){
//     console.log(a,b);
// }

// if (true){
//     let d = 30; // Block level scope
// }
// // console.log(d);

// const add = ()=>{
//     let c = 30; // Functional scope
// }
// console.log(c);

// let and const respects every scope. whereas, var can be accessed from outside a block, but cannot be accessed from outside a function!


// CLOSURE -> a fn that remembers  variables from its outer scope even after the outer function has finished executing.
function createCounter(){
    let count = 0;
    function increment(){
        count ++;
        return count;
    }
    return increment;
}

const counter  = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
