let grid = document.querySelector(".grid-container");

function createGridItem(grid){
    let element = document.createElement("div");
    grid.appendChild(element);
}

for (let row = 1; row < 16; row++){
    for(let col = 1; col < 16; col++){
        createGridItem(grid);
    }
}
