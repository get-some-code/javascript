// console.log("Hello World! Start");

// const p1 = fetch("https://api.github.com/users");
// console.log(p1);

// promises can be either Fullfilled or Rejected
// const p2 = p1.then((response)=>{
//     return response.json(); 
// })

// p2.then((response)=>{
//     console.log(response);
    
// })


// Better approach - promise chaining
// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


// console.log("Hello World! End");


// creating promises
const promise1 = new Promise((resolve, reject)=>{
    resolve("Hellooouu");
    reject("Byeee");
})

promise1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
