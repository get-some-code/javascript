const result = document.getElementById("result");

setInterval(()=>{
    const currentTime = Date.now();
    const wcTime = new Date(2026,1,7).getTime();
    let timer = wcTime - currentTime;
    const day = (timer)/(1000*60*60*24);
    timer %= (1000*60*60*24);
    const hour = (timer)/(1000*60*60);
    timer %= (1000*60*60);
    const minute = (timer)/(1000*60);
    timer %= (1000*60);
    const second = (timer)/1000;
    result.textContent = `${Math.floor(day)} Days : ${Math.floor(hour)} Hours : ${Math.floor(minute)} Minutes : ${Math.floor(second)} Seconds`
},1000)




