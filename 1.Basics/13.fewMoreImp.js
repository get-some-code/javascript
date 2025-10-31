// for-each loop, filter, reducer, map, set

// for-each
// const arr = [10,20,30,59,90];

// arr.forEach((number, index, arr)=>{
//     console.log(number, index, arr);
// })


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Smartwatch", category: "Electronics", price: 250, inStock: true },
  { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 150, inStock: true },

  // Home Appliances
  { id: 6, name: "Refrigerator", category: "Home Appliances", price: 900, inStock: true },
  { id: 7, name: "Microwave Oven", category: "Home Appliances", price: 300, inStock: false },
  { id: 8, name: "Washing Machine", category: "Home Appliances", price: 700, inStock: true },
  { id: 9, name: "Air Conditioner", category: "Home Appliances", price: 1100, inStock: true },
  { id: 10, name: "Vacuum Cleaner", category: "Home Appliances", price: 250, inStock: true },

  // Fashion
  { id: 11, name: "T-Shirt", category: "Fashion", price: 25, inStock: true },
  { id: 12, name: "Jeans", category: "Fashion", price: 50, inStock: false },
  { id: 13, name: "Sneakers", category: "Fashion", price: 90, inStock: true },
  { id: 14, name: "Jacket", category: "Fashion", price: 120, inStock: true },
  { id: 15, name: "Watch", category: "Fashion", price: 180, inStock: false },

  // Books
  { id: 16, name: "JavaScript Guide", category: "Books", price: 30, inStock: true },
  { id: 17, name: "Python Cookbook", category: "Books", price: 40, inStock: true },
  { id: 18, name: "Machine Learning 101", category: "Books", price: 50, inStock: false },
  { id: 19, name: "Design Patterns", category: "Books", price: 45, inStock: true },
  { id: 20, name: "Clean Code", category: "Books", price: 35, inStock: true },
];


//filter
// const arr = [10,20,30,59,90];

// const newArr = arr.filter((number)=> number>25);
// console.log(newArr);

// const newArr = products.filter((products)=> products.price > 700);
// console.log(newArr);



// map
// const arr = [10,20,30,59,90];

// const newArr = arr.map((num)=>num*2);
// console.log(newArr);

// const newArr = products.map((products)=> ({name: products.name, price: products.price}));
// console.log(newArr);
// const newArr2 = products.map((products)=>products.price*0.2 + products.price); // increased product prices by 2%
// console.log(newArr2);



// reduce() - reduce() is a JavaScript array method that takes all the elements of an array and reduces them into a single value (like a sum, average, object, or even another array).

// currentValue - The current element of the array being processed. ex: { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true }, then next element...

// accumulator - The value that carries over between iterations.
// here we want to get the total sum of the prices. So initially accumulator = sum = 0

// const total = products.reduce((accumulator, currentValue)=>{
//         return accumulator + currentValue.price;
// },0) // 0 is the initial value of accumulator

// console.log(total);

// const inStock = products.reduce((accumulator,currentValue)=>{
//     if(currentValue.inStock) return accumulator + currentValue.price;
//     else return accumulator;
// },0)
// console.log(inStock);


// Data Structures - SET and MAP

// SET - has only unique values

// const arr = [10,20,30,59,90,10,57,30,90,74,56];
// const s1 = new Set(arr);
// console.log(s1);
// s1.add(11);
// console.log(s1);
// console.log(s1.has(20));
// console.log(s1.has(87));
// s1.delete(10)
// console.log(s1);
// console.log(s1.size);


// MAP - A Map is a built-in JavaScript object that stores key–value pairs — just like an object but with superpowers !

// const m1 = new Map([
//     ["Moni", 19],
//     [2, "Moniii"],
//     [true, 11],
//     [[10,20,30], "Virat"]
// ])
// console.log(m1);

// m1.set({name:"monii",age: 19}, false);
// console.log(m1.has("Rohit"));
// console.log(m1);