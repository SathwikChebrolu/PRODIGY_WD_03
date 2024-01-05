let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('status').innerText = `Player ${gameBoard[a]} wins!`;
            return true;
        }
    }

    return false;
}

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin() || checkTie()) {
            gameActive = false;
            if (checkWin()) {
                document.getElementById('status').innerText = `Player ${gameBoard[index]} wins!`;
            } else {
                document.getElementById('status').innerText = 'It\'s a tie!';
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Current Player: ${currentPlayer}`;
        }
    }
}


function checkTie() {
    if (!gameBoard.includes('')) {
        document.getElementById('status').innerText = 'It\'s a tie!';
        return true;
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }

    document.getElementById('status').innerText = `Current Player: ${currentPlayer}`;
}