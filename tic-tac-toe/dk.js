let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let players = { X: "Player 1", O: "Player 2" };
let gameActive = false;

function startGame() {
    const p1 = document.getElementById("player1").value.trim();
    const p2 = document.getElementById("player2").value.trim();
    if (!p1 || !p2) {
        alert("Please enter both player names!");
        return;
    }
    players.X = p1;S
    players.O = p2;
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    gameActive = true;
    updateTurnText();
    createBoard();
}

function createBoard() {
    const boardContainer = document.getElementById("board");
    boardContainer.innerHTML = "";
    board = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        boardContainer.appendChild(cell);
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner()) {
        document.getElementById("resultText").textContent = `${players[currentPlayer]} Wins! 🎉`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== "")) {
        document.getElementById("resultText").textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateTurnText();
}

function updateTurnText() {
    document.getElementById("turnText").textContent = `${players[currentPlayer]}'s Turn (${currentPlayer})`;
}

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // cols
        [0,4,8], [2,4,6]           // diagonals
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function restartGame() {
    document.getElementById("resultText").textContent = "";
    currentPlayer = "X";
    gameActive = true;
    updateTurnText();
    createBoard();
}
