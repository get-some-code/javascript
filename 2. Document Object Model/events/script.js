// handling single event
const element = document.getElementById("first");
// function handleClick(){
//     element.textContent = "Good Morning!"
// }

// handle multiple events at the same time. ex: clicking a button and changing its color after being clicked!
element.addEventListener('click',()=>{
    element.textContent = "I am the best!";
})

element.addEventListener('click',()=>{
    element.style.backgroundColor = "pink";
    element.style.color = "brown";
})

// majdoori
// const child1 = document.getElementById("child1");
// const child2 = document.getElementById("child2");
// const child3 = document.getElementById("child3");
// const child4 = document.getElementById("child4");
// const child5 = document.getElementById("child5");

// child1.addEventListener('click',()=>{
//     child1.textContent = 'I am clicked!'
// })
// child2.addEventListener('click',()=>{
//     child2.textContent = 'I am clicked!'
// })
// child3.addEventListener('click',()=>{
//     child3.textContent = 'I am clicked!'
// })
// child4.addEventListener('click',()=>{
//     child4.textContent = 'I am clicked!'
// })
// child5.addEventListener('click',()=>{
//     child5.textContent = 'I am clicked!'
// })


// Unoptimised smart work
// const parent = document.getElementById("parent");
// for (let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked!";
//     })
// }



// Optimised - Bubbling 
const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     e.target.textContent = "I am clicked!"
// })

// e is an object which tells exactly where the event is happening and based on that we can apply CRUD there.


// removing an event listener
function handleClick(e){
    e.target.textContent = "I am clicked!"
}

parent.addEventListener('click',handleClick);

parent.removeEventListener('click',handleClick)