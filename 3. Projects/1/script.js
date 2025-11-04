const quotes = {
  0: "The best way to get started is to quit talking and begin doing. – Walt Disney",
  1: "Don’t let yesterday take up too much of today. – Will Rogers",
  2: "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  3: "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  4: "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  5: "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  6: "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  7: "Dream bigger. Do bigger. – Anonymous",
  8: "Your limitation—it’s only your imagination. – Anonymous",
  9: "Push yourself, because no one else is going to do it for you. – Anonymous",
  10: "Great things never come from comfort zones. – Anonymous",
  11: "Success doesn’t just find you. You have to go out and get it. – Anonymous",
  12: "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
  13: "Dream it. Wish it. Do it. – Anonymous",
  14: "Don’t stop when you’re tired. Stop when you’re done. – Marilyn Monroe",
  15: "Wake up with determination. Go to bed with satisfaction. – George Lorimer",
  16: "Little things make big days. – Isabel Marant",
  17: "Do something today that your future self will thank you for. – Sean Patrick Flanery",
  18: "It always seems impossible until it’s done. – Nelson Mandela",
  19: "Believe you can and you’re halfway there. – Theodore Roosevelt"
};


const button = document.getElementById("next");
const quote = document.getElementById("quote");

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})
