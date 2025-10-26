const user = {
    name: "Monideep",
    age: 19,
    emailId: "monideep.mistry@gmail.com",
    amount: 3000
}                      // create
// console.log(user);
// console.log(user.age); //read
// console.log(user["name"]);


// user.aadhar = 12345;
// user.amount = 5000; // update

// console.log(user);

// delete user.emailId; // delete
// console.log(user);

// const user2 = user; //primitive
// user2.age = 50;
// console.log(user);

// accessing keys and values

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user) {
//     console.log(keys + " : " + user[keys]);
// }

// const name = user.name;
// const age = user.age;
// console.log(name,age);

// another way - Destructuring
// const {name,age,amount} = user;
// console.log(name,age,amount);

// giving separate names
// const {name:userName,age:userAge,amount} = user;
// console.log(userName,userAge);

//looping - for-of loop only applicable in array NOT in objects!
// for (let keys of Object.keys(user)){
//     console.log(keys);
// }
// for (let values of Object.values(user)){
//     console.log(values);
// }
// for (let entry of Object.entries(user)){
//     console.log(entry);
// }
// for (let [key,value] of Object.entries(user)){
//     console.log(key,value);
// }

// creating functions inside an object
const user2 = {
    name: "Monideep",
    age: 19,
    emailId: "monideep.mistry@gmail.com",
    amount: 3000,
    // greeting: function(){
    //     console.log(`Good Morning, ${this.name}`);
    //     return 20;  
    // },
    address: {
        "city": "Kolkata",
        "state": "West Bengal"
    }
}  
// const result = user2.greeting();
// console.log(result);

// //why this? -> it takes the current object 
// const user3 = {
//     name: "Virat",
//     account: 2039133
// }
// user3.greeting = user2.greeting;
// console.log(user3.greeting());

// we can also write nested objects

// creating independent copy of an object or SHallow Copy
// const user4 = {...user2};
// user4.name = "Rohit";
// console.log(user2);
// console.log(user4);

// but it handles only upto 1 label. nested objects will always take reference from the original one. so any change in the nested object of user4 will reflect in user2 as well!
// user4.address.city = "Mumbai";
// console.log(user2);
// console.log(user4);


// Creating Deep Copy!
const user5 = structuredClone(user2); // remember - function cannot be deep copied! 
user5.address.city = "Mumbai";
console.log(user2);
console.log(user5);






 