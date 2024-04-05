let board = document.querySelector(".board");
let boardDimensions = 16;

function createGrid(numberOfGrids) {
    for (let i = 0; i < numberOfGrids; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        board.appendChild(gridRow);

        for (let j = 0; j < numberOfGrids; j++) {
            const heightAndWidth = 600 / boardDimensions;
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.height = `${heightAndWidth}px`;
            gridBox.style.width = `${heightAndWidth}px`;
            gridRow.appendChild(gridBox);
        }
    }
}

createGrid(boardDimensions);