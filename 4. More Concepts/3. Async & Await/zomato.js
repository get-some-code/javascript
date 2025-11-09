// Dummy Zomato application logic using async/await

let orderDetail = {
    customerName: "Monideep Mistry",
    customerLocation: "Newtown Action Area II",
    restaurantLocation: "Candor Gate 1",
    restaurantName: "Zafrani",
    food: ["Biryani", "Chicken Chap", "Raita", "Coke"],
    cost: 765,
    orderId: 54325,
    paymentStatus: ""
};

function placeOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log("💳 Payment is in progress...");
        orderDetail.paymentStatus = "pending";

        setTimeout(() => {
            console.log(`💰 Payment of ₹${orderDetail.cost} received! Order placed successfully.`);
            orderDetail.paymentStatus = "successful";
            resolve(orderDetail);
        }, 5000);
    });
}

function preparingOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log(`🍳 Your order (${orderDetail.food.join(", ")}) is being prepared...`);

        setTimeout(() => {
            console.log("👨‍🍳 Your food is prepared!");
            orderDetail.tokenId = 541;
            resolve(orderDetail);
        }, 15000);
    });
}

function delivery(orderDetail) {
    return new Promise((resolve, reject) => {
        console.log("📦 Delivery agent is yet to pick up the order...");

        setTimeout(() => {
            console.log(`🏍️ Order picked up from ${orderDetail.restaurantName}. Out for delivery!`);
        }, 10000);

        setTimeout(() => {
            console.log(`📍 Delivered successfully to ${orderDetail.customerLocation}.`);
            orderDetail.delivered = true;
            resolve(orderDetail);
        }, 20000);
    });
}

async function workflow(orderDetail) {
    try {
        await placeOrder(orderDetail);
        await preparingOrder(orderDetail);
        await delivery(orderDetail);

        console.log("🎉 Enjoy your meal!");
    }
    catch (err) {
        console.log("❌ Error:", err);
    }
}

workflow(orderDetail);
