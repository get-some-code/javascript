// memory - 2 types
// stack (primitive datatypes)
// heap (non-primitive datatypes)


//stack: original er akta copy dewa hoy. copy te kichhu change korle original e kono effect hoy na.
let myYoutubeName = "Hello world"
let anotherName = myYoutubeName

anotherName = "Hii World";

console.log(myYoutubeName);
console.log(anotherName);

//heap: original er reference dewa hoy. tai reference e kichhu change korle sheta original eo reflect hobe!
let user1 = {
    email : "user@google.com",
    password : "125364"
}
let user2 = user1
user2.email = "user@yahoo.com"

console.log(user1.email);
console.log(user2.email);

