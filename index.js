let board = document.querySelector(".board");
let boardDimensions = 16;

function createGrid(numberOfGrids) {
    for (let i = 0; i < numberOfGrids; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        board.appendChild(gridRow);

        for (let j = 0; j < numberOfGrids; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            changeGridColor(gridBox);
            gridRow.appendChild(gridBox);
        }
    }   
}

function createRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g, b};
}

function changeGridColorRandom(box) {
    const {r, g, b} = createRandomRGB();
    box.addEventListener("mouseover", () => {
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";
    box.style.background = bgColor;
    });
}

function resetBoard() {
    boardDimensions = prompt("What size grid do you want? (1-100)");
    if (boardDimensions >= 1 && boardDimensions <= 100) {
        board.textContent = "";
        createGrid(boardDimensions);
    }
    else {
        alert("Please enter a number between 1-100");
    }
}

let resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", resetBoard);

createGrid(boardDimensions);
