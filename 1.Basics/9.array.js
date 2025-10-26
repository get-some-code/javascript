// let marks = [100,90,95,69,74];
// console.log(marks);

// let arr = [100,'Moni',12.90,"Virat",'c'];
// console.log(arr);
// console.log(arr[1]);

// arr[1] = 'Monideep'; // arrays are mutable
// console.log(arr);

// arr.push(99) // push - adds at the end
// arr.push("Rohit")
// console.log(arr);

// arr.pop() // pop - retrieve and delete from end
// console.log(arr);

// deleted = arr.pop();
// console.log(deleted);

// // add elements at the first place
// arr.unshift(10);
// console.log(arr);

// // delete from the first
// arr.shift();
// console.log(arr);

// let arr = [10,20,30,25,11,50];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);  
// }

// for (let num of arr){
//     console.log(num);
// }

//slice operation
// const arr = [10,20,25,13,45];
// const arr2 = arr.slice(2,4);
// console.log(arr2);
// console.log(arr);

//splice operation
// const arr = [10,20,25,13,45];
// arr.splice(1,3);
// console.log(arr);

//merge two arrays
// const arr1 = [10,20,25,13,45];
// const arr2 = ['Rohit',45,'Virat',18];
// const arr4 = [96,"Shreyas"]
// const arr3 = arr1.concat(arr2,arr4);
// console.log(arr3);

// //spread operator
// const arr5 = [...arr1,...arr2,...arr4];
// console.log(arr5);

//join
// const names = ["Mohit","Rohit","Alice","Bob","Charlie","Bob"];
// console.log(names.toString());
// console.log(names.join(" "));
// console.log(names.join(":"));

// console.log(names.indexOf("Bob"));

// console.log(names.sort()); //ascending - based on ascii table
// console.log(names.reverse()) //descending

// const a = [101,20,300,24,100,230];
// console.log(a.sort());

// const b = [10,'Rohit','Alice',true,false,20];
// console.log(b.sort());


// let n = [10,3,110,25,75,200];
// n.sort((a,b)=>a-b); //ascending
// console.log(n);

// n = [10,3,110,25,75,200];
// n.sort((b,a)=>a-b); //descending
// console.log(n);


// -ve -> pehle a phir b
// +ve -> pehle b phir a


const arr = [10,30,29,[50,40,[22,33,17,[55,98,76,56,65]],11],80,90];
console.log(arr[3]);
console.log(arr[3][2][3]);

console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(Infinity));







