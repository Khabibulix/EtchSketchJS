let grid = document.querySelector(".grid-container");
let resizeButton = document.querySelector("#resize-grid-button")


function createGridItem(grid, gridSize){
    let element = document.createElement("div");
    element.style.border = "1px solid black";
    element.style.width = gridSize+"%";
    element.style.height = gridSize+"%";
    grid.appendChild(element);    
}

function addingEventListenersToGridItems(){    
    let gridItems = document.querySelectorAll(".grid-container div");

    gridItems.forEach(function(item) {
        item.addEventListener("mouseover", (event) => {
            event.currentTarget.style.backgroundColor = "black";
        });
    });
}

resizeButton.addEventListener("click", () => {
    let number_of_grid_elements = prompt("Enter the new size of the grid");
    const SIZE_FOR_GRID_ELEMENT = 100 / number_of_grid_elements;
    
    for (let row = 0; row < number_of_grid_elements; row++){
        for(let col = 0; col < number_of_grid_elements; col++){
            createGridItem(grid, SIZE_FOR_GRID_ELEMENT);
        }
    }
    addingEventListenersToGridItems();
    
});



