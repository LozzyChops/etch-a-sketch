const gridContainer = document.querySelector('#grid-container');

function makeGrid(number){
    gridContainer.style.setProperty('--grid-rows', number);
    gridContainer.style.setProperty('--grid-columns', number);
    for (i = 0; i < (number * number); i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
                
        gridContainer.appendChild(gridItem);
        document.getElementsByClassName("grid-item")[i].addEventListener("mouseenter", () => gridItem.className = "hover");
        document.getElementsByClassName("grid-item")[i].addEventListener("mouseleave", () => gridItem.className = "after-hover");
    };
};

makeGrid(15);