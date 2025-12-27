import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));

let currentNumber = 0;

// Trending Style RNG
function generateTrendingNumber() {
  let weighted = [0,1,2,3,4,5,6,7,8,9];
  weighted.push(3,5,7,9,9,7,5);
  return weighted[Math.floor(Math.random()*weighted.length)];
}

function startRound() {
  currentNumber = generateTrendingNumber();
}
setInterval(startRound, 60000);
startRound();

app.get("/result", (req,res)=>{
  let now = new Date();
  let sec = now.getSeconds();
  let remaining = 60 - sec;

  res.json({
    number: sec >= 40 ? currentNumber : null,
    remainingSeconds: remaining,
    seconds: sec
  });
});

app.listen(10000, ()=> console.log("Sachin Panel Running..."));