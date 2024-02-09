function extractGameState() {
    const gameState = [];
    const table = document.querySelector('.size-3x3');

    if (table) {
        const rows = table.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = [];

            cells.forEach(cell => {
                const svg = cell.querySelector('svg');
                if (svg) {
                    const symbol = svg.getAttribute('aria-label');
                    rowData.push(symbol);
                } else {
                    rowData.push('');
                }
            });

            gameState.push(rowData);
        });
    }

    return gameState;
}

function checkWin(gameState, player) {
    for (let i = 0; i < 3; i++) {
        if (gameState[i][0] === player && gameState[i][1] === player && gameState[i][2] === player) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (gameState[0][j] === player && gameState[1][j] === player && gameState[2][j] === player) {
            return true;
        }
    }

    if ((gameState[0][0] === player && gameState[1][1] === player && gameState[2][2] === player) ||
        (gameState[0][2] === player && gameState[1][1] === player && gameState[2][0] === player)) {
        return true;
    }

    return false;
}

function findBestMove(gameState, player) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameState[i][j] === '') {
                gameState[i][j] = player;
                if (checkWin(gameState, player)) {
                    gameState[i][j] = '';
                    return { row: i, col: j };
                }
                gameState[i][j] = '';
            }
        }
    }

    return findBestMoveToBlock(gameState, player);
}

function findBestMoveToBlock(gameState, player) {
    const opponent = player === 'X' ? 'O' : 'X';
    function hasTwoAndOneEmpty(cell1, cell2, cell3, symbol) {
        return (cell1 === opponent && cell2 === opponent && cell3 === '') ||
               (cell1 === opponent && cell2 === '' && cell3 === opponent) ||
               (cell1 === '' && cell2 === opponent && cell3 === opponent);
    }

    for (let i = 0; i < 3; i++) {
        if (hasTwoAndOneEmpty(gameState[i][0], gameState[i][1], gameState[i][2], opponent)) {
            if (gameState[i][0] === '') return { row: i, col: 0 };
            if (gameState[i][1] === '') return { row: i, col: 1 };
            if (gameState[i][2] === '') return { row: i, col: 2 };
        }
    }

    for (let j = 0; j < 3; j++) {
        if (hasTwoAndOneEmpty(gameState[0][j], gameState[1][j], gameState[2][j], opponent)) {
            if (gameState[0][j] === '') return { row: 0, col: j };
            if (gameState[1][j] === '') return { row: 1, col: j };
            if (gameState[2][j] === '') return { row: 2, col: j };
        }
    }

    if (hasTwoAndOneEmpty(gameState[0][0], gameState[1][1], gameState[2][2], opponent)) {
        if (gameState[0][0] === '') return { row: 0, col: 0 };
        if (gameState[1][1] === '') return { row: 1, col: 1 };
        if (gameState[2][2] === '') return { row: 2, col: 2 };
    }

    if (hasTwoAndOneEmpty(gameState[0][2], gameState[1][1], gameState[2][0], opponent)) {
        if (gameState[0][2] === '') return { row: 0, col: 2 };
        if (gameState[1][1] === '') return { row: 1, col: 1 };
        if (gameState[2][0] === '') return { row: 2, col: 0 };
    }

    if (gameState[0][0] === '') {
        return { row: 0, col: 0 };
    } else if (gameState[0][2] === '') {
        return { row: 0, col: 2 };
    } else if (gameState[2][0] === '') {    
        return { row: 2, col: 0 };
    } else if (gameState[2][2] === '') {
        return { row: 2, col: 2 };
    } else {
        const emptyCells = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameState[i][j] === '') {
                    emptyCells.push({ row: i, col: j });
                }
            }
        }
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
}

function clickBestMove(player) {
    const gameState = extractGameState();
    const bestMove = findBestMove(gameState, player);

    const cellElement = document.querySelector(`.cell-${bestMove.row}-${bestMove.col}`);

    if (cellElement) {
        cellElement.click();
    }
}

const leaveRoomButton = document.querySelector('button.btn.btn-outline-dark.ng-tns-c1718224995-4');
if (leaveRoomButton) {
    leaveRoomButton.click();
}

const button = document.querySelector('button[type="submit"].btn-secondary.flex-grow-1');
if (button) {
    button.click();
}

setInterval(() => {
    const gameState = extractGameState();
    const player = gameState.flat().filter(cell => cell !== '').length % 2 === 0 ? 'X' : 'O';
    clickBestMove(player);
}, 300);

function clickButton() {
  const button = document.querySelector('.btn.btn-secondary.flex-grow-1');

  if (button) {
    button.click();
  }
}

setInterval(clickButton, 1000);
