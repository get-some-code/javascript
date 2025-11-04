const bgcolor = document.getElementById("changeColor");
bgcolor.addEventListener('click',(e)=>{
  const child = e.target;
  document.body.style.backgroundColor = child.id;
})
