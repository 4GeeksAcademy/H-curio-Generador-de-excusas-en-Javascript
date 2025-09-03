import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
 //write your code here
const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function generateExcuse() {
  const w = pickRandom(who);
  const a = pickRandom(action);
  const wh = pickRandom(what);
  const t = pickRandom(when);
  return `${w} ${a} ${wh} ${t}`;
}
window.onload = function () {
  const excuseEl = document.getElementById("excuse");
  excuseEl.innerHTML = generateExcuse();

  
  const btn = document.getElementById("regen");
  if (btn) {
    btn.addEventListener("click", () => {
      excuseEl.innerHTML = generateExcuse();
    });
  }

  console.log("Excuse Generator listo!");
};
