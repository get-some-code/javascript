// const newElement = document.createElement("h2");
// newElement.textContent = "India won women's world cup!"
// newElement.id = "second";

// // select element
// const element = document.getElementById("first");
// element.after(newElement);
// // element.before(newElement);

// const newElement2 = document.createElement("h2");
// newElement2.id = "third";
// newElement2.textContent = "Christmas is comingggg!!!!";

// // giving multiple classname
// newElement2.classList = "fourth";
// newElement2.classList = "fifth";

// newElement.after(newElement2);
// newElement2.style.fontSize = "30px";

// // inserting into a list
// const list1 = document.createElement("li");
// list1.textContent = "Milk";
// const unorderList = document.getElementById("listing");
// unorderList.append(list1);

// const list2 = document.createElement("li");
// list2.textContent = "Tea";
// unorderList.append(list2);

// const list3 = document.createElement("li");
// list3.textContent = "Water";
// unorderList.prepend(list3); 

// or
// unorderList.append(list1,list2);


// all at once
// const arr = ["water","sugar","milk","tea"];
// const unorderList = document.getElementById("listing");

// for (let ingredient of arr){
//     const list = document.createElement("li");
//     list.textContent = ingredient;
//     unorderList.append(list);
// }
// unorderList.style.fontSize = "40px";

// but the above process is not optimized!!!
// using fragment

const arr = ["water","sugar","milk","tea"];
const unorderList = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for (let ingredient of arr){
    const list = document.createElement("li");
    list.textContent = ingredient;
    fragment.append(list)
}
unorderList.append(fragment);
unorderList.style.fontSize = "40px";



