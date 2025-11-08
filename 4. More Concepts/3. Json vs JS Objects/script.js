
// javascript object -> JSON
let jsObject1 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 37,
    testRuns: 9230,
    odiRuns: 14255,
    t20Runs: 4188,
    internationalCenturies: 82
}

let jsonFormat1 = JSON.stringify(jsObject1);
console.log(jsonFormat1);
console.log(typeof jsonFormat1); // string


console.log("\n\n");

console.log("=====================================================================================");

console.log("\n\n");


// JSON -> javascript object
let jsonFormat2 = `{
    "firstName":"Virat",
    "lastName":"Kohli",
    "age":37,
    "testRuns":9230,
    "odiRuns":14255,
    "t20Runs":4188,
    "internationalCenturies":82
}`;

let jsObject2 = JSON.parse(jsonFormat2);
console.log(jsObject2);
console.log(typeof jsObject2); // object


