const gridContainer = document.querySelector('#grid-container');
const btn = document.getElementById("btn");
let userChoice = 10;

for (i = 0; i < (userChoice*userChoice); i++) {
    debugger;
        
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
                
    gridContainer.appendChild(gridItem);
    document.getElementsByClassName("grid-item")[i].addEventListener("mouseenter", () => gridItem.className = "hover");
    document.getElementsByClassName("grid-item")[i].addEventListener("mouseleave", () => gridItem.className = "after-hover");
    
    gridContainer.style.setProperty('--grid-rows', userChoice);
    gridContainer.style.setProperty('--grid-columns', userChoice);
};
    

function makeGrid() {
    debugger;
    let oldChoice = userChoice;
    userChoice = prompt("What size grid would you like?", "example: '10' yields a 10x10 grid");

    for (i = 0; i < (oldChoice*oldChoice); i++) {
        gridItem = gridContainer.firstElementChild;
        gridContainer.removeChild(gridItem);
    }
    debugger;
    
    for (i = 0; i < (userChoice*userChoice); i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
                
        gridContainer.appendChild(gridItem);
        document.getElementsByClassName("grid-item")[i].addEventListener("mouseenter", () => gridItem.className = "hover");
        document.getElementsByClassName("grid-item")[i].addEventListener("mouseleave", () => gridItem.className = "after-hover");
    };
    debugger;

    gridContainer.style.setProperty('--grid-rows', userChoice);
    gridContainer.style.setProperty('--grid-columns', userChoice);
    debugger;
};