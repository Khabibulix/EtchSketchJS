let grid = document.querySelector(".grid-container");
const NUMBER_OF_GRID_ELEMENTS = 16;
const SIZE_FOR_GRID_ELEMENT = 100 / NUMBER_OF_GRID_ELEMENTS;



function createGridItem(grid){
    let element = document.createElement("div");
    element.style.border = "1px solid black";
    element.style.backgroundColor = "blue";
    element.style.width = SIZE_FOR_GRID_ELEMENT+"%";
    element.style.height = SIZE_FOR_GRID_ELEMENT+"%";
    grid.appendChild(element);
}

for (let row = 0; row < NUMBER_OF_GRID_ELEMENTS; row++){
    for(let col = 0; col < NUMBER_OF_GRID_ELEMENTS; col++){
        createGridItem(grid);
    }
}

// let gridItems = document.querySelectorAll(".grid-container *");

// gridItems.forEach(function(item) {
//     item.addEventListener("mouseover", (event) => {
//         event.currentTarget.style.backgroundColor = "black";
//     });
// });