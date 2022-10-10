
let countEl = document.getElementById("count-el"); 
let saveEl=document.getElementById("save-el")
//console.log(countEl);

let count = 0;

function increment() {
    count++;
  countEl.textContent = count;
}

function save() {
    let people=count + " - "
    saveEl.textContent += people
    countEl.textContent = 0
    count = 0
}
