function updateClock(){
  const d = new Date();
  document.getElementById("clock").innerHTML =
    String(d.getHours()).padStart(2,"0")+":"+
    String(d.getMinutes()).padStart(2,"0")+":"+
    String(d.getSeconds()).padStart(2,"0");
}
setInterval(updateClock, 1000);

async function loadResult(){
  let res = await fetch("/result");
  let data = await res.json();

  document.getElementById("remain").innerText = data.remainingSeconds;

  if(data.number === null){
    document.getElementById("result").innerHTML = "⏳ WAITING";
    document.getElementById("status").innerHTML =
      "Result 40s pe dikhega 🔥";
  } else {
    document.getElementById("result").innerHTML = data.number;
    document.getElementById("status").innerHTML =
      "🔥 FINAL RESULT LOCKED";
  }
}
setInterval(loadResult, 1000);
loadResult();