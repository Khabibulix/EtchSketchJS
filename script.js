let grid = document.querySelector(".grid-container");

function createGridItem(grid){
    let element = document.createElement("div");
    element.style.backgroundColor = "blue";
    element.style.height = "20px";
    element.style.width = "20px";
    grid.appendChild(element);
}

createGridItem(grid);