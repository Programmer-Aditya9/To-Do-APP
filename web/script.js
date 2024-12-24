const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ul.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

ul.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

let saveData = () => {
    localStorage.setItem("data", ul.innerHTML);
}

let showData = () => {
    ul.innerHTML = localStorage.getItem("data");
}

showData();