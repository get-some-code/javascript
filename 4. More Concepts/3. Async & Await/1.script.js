// async function - always returns a promise
// async function getData(){
//     return "namaste";
// }

// const dataPromise = getData();
// // console.log(dataPromise); // return a Promise {'namaste}

// dataPromise.then(response => console.log(response));


// async and await are the combo which is used to handle promises
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved!");
//     },5000);
// });

// function getData(){
//     p.then(res => console.log(res)); // using normal promise to resolve p
// }

// getData()


// async function handlePromise1(){
//     const val = await p;
//     console.log("Namaste Javascript!");
//     console.log(val);
// }
// handlePromise1()

// NOTE - await can only be used inside an async function.
// we write await keyword infront of a promise and it handles the promise.
// while we use async await, the js engine appears to be waiting for the code to run.


// just playing
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved!");
    },10000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved!");
    },5000);
});


async function handlePromise2(){
    console.log("Beginning...");

    const val1 = await p1;
    console.log("Namaste Javascript 1!");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript 2!");
    console.log(val2);

    console.log("End");
}
handlePromise2()

// NOTE - javascript engine keep on executing all the codes and appears to be waiting for the first await, but never displays them before the first await. The display will always go on serially. ex1: if the first promise is 10s and the second one is 10s as well, then all the codes will be executed one after another, but we'll get to see the output serially after the first wait is over. which means, after 10 sec we'll see all the outputs. ex2: if the first promise is 10s and the second one is 15s, then the first wait will be over after 10s and the next wait will only be of 5s. 




