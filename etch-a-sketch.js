const gridContainer = document.querySelector('#grid-container');

function makeGrid(number) {
    gridContainer.style.setProperty('--grid-rows', number);
    gridContainer.style.setProperty('--grid-columns', number);
    for (i = 0; i < (number * number); i++) {
        const gridItem = document.createElement("div");
        gridItem.innerText = (i + 1);
        gridContainer.appendChild(gridItem).className = "grid-item";
    }
}

makeGrid(10);