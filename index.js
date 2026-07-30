let counter=0;
let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("counter-el");

function increment(){
  counter+=1;
  countEl.textContent=counter;
  console.log(counter);
}
document.getElementById("increment-btn").addEventListener("click", increment);

function save(){
  saveEl.textContent+=counter+" - ";
}
document.getElementById("save-btn").addEventListener("click", save);