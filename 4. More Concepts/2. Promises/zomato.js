//dummy zomato application logic

let orderDetail = {
    customerName: "Monideep Mistry",
    customerLocatiomn: "Newtown Action Area II",
    restaurantLocation: "Candor Gate 1",
    restaurantName: "Zafrani",
    food: ["Biryani", "Chicken Chap", "Raita", "Coke"],
    cost: 765,
    orderId: 54325,
    paymentStatus: ""
}

function placeOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log("Payment is in progress...");
        orderDetail.paymentStatus = "pending";
        setTimeout(() => {
            console.log(`Payment of Rs. ${orderDetail.cost} is received and order has been placed!`);
            orderDetail.paymentStatus = "sucessfull";
            resolve(orderDetail)
        }, 3000);
    })

}

function preparingOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log(`Your order of ${orderDetail.food} is being prepared!`);
        setTimeout(() => {
            console.log("Your order has been prepared!");
            orderDetail.tokenId = 541;
            resolve(orderDetail);
        }, 5000);
    })
}

function delivery(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log("Delivery agent yet to pick the order!");

        setTimeout(() => {
            console.log(`Your order has been picked up by the delivery agent from ${orderDetail.restaurantName} and is out for delivery!`);
        }, 3000);

        setTimeout(() => {
            console.log(`Your order has been delivered successfully at ${orderDetail.customerLocatiomn}.`);
            orderDetail.delivery = true;
            resolve(orderDetail)
        }, 7000);
    });
}

placeOrder(orderDetail)
.then(preparingOrder)
.then(delivery)
.catch(error=>{
    console.log("error: ",error);
});
