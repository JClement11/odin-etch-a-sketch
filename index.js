let board = document.querySelector(".board");
let boardDimensions = 16;
let color = "black";

function createGrid(numberOfGrids) {
    for (let i = 0; i < numberOfGrids; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        board.appendChild(gridRow);

        for (let j = 0; j < numberOfGrids; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridRow.appendChild(gridBox);
            gridBox.addEventListener("mouseover", changeColor);
        }
    }  
}
    
function createRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g, b};
}

function changeColor() {
    if (color === "random") {
        const {r, g, b} = createRandomRGB();
        const bgColor = "rgb(" + r + "," + g + "," + b + ")";
        this.style.backgroundColor = bgColor;
    }
    else {
        this.style.backgroundColor = color;
    }
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

let blackButton = document.querySelector(".black-btn");
let rgbButton = document.querySelector(".rgb-btn");

blackButton.addEventListener("click", () => {
    color = "black";
});
rgbButton.addEventListener("click", () => {
    color = "random";
});

createGrid(boardDimensions);