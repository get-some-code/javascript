const button = document.getElementById("calc");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const name1 = document.getElementById("myName").value.trim().toLowerCase();
  const name2 = document.getElementById("crushName").value.trim().toLowerCase();

  if (!name1 || !name2) {
    result.textContent = "Please enter both names 😅";
    return;
  }
    
  let combined = name1 + name2;
  let score = 0;
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  let lovePercent = (score % 101);

  let message = "";
  if (lovePercent > 80) message = "💖 Made for each other!";
  else if (lovePercent > 50) message = "💞 There’s a spark!";
  else if (lovePercent > 30) message = "💘 Keep trying!";
  else message = "💔 Maybe just friends?";

  result.innerHTML = `${name1} ❤️ ${name2} = ${lovePercent}% <br>${message}`;
});
