//dummy zomato application logic
function placeOrder(Callback){
    console.log("Payment is in progress...");

    setTimeout(()=>{
        console.log("Payment is received and order is placed!");
        Callback();
    },3000)
}

function preparingOrder(Callback){
    console.log("Your order is being prepared!");

    setTimeout(()=>{
        console.log("Your order has been prepared!");
        Callback();
    },5000)
}

function delivery(){
    console.log("Delivery agent yet to pick the order!");

    setTimeout(()=>{
        console.log("Your order has been picked up by the delivery agent and is out for delivery!");
    },3000)
}

// callback chaining
placeOrder(()=>{
    preparingOrder(()=>{
        delivery();
    })
})