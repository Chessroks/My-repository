const PLAYER_X = "X";
const PLAYER_O = "O";
const board = document.getELementById("board");
let playerName = PLAYER_X;

function winGame() {
  return "You won!"
}

function makeColumnHtml(id, marker) {
return `<td id="${id}" onclick="cellClick(this)">[${marker}]</td>`;
}

funciton cellClick(cell) {
cell.innerHTML = makeColumnHtml(cell.id, playerName);
switchPlayer();
}

function displayPlayerName() {
document.getElementById("currentPlayer").innerText = "CurrentPlayer: " + playerName;
}

function switchPlayer() {
playerName = (playerName == PLAYER_X) ? PLAYER_O : PLAYER_X;
displayPlayerName();
}

function init() {
playerName = PLAYER_X;
displayPlayerName();
let boardHtml = "";

for (let ix = 0; ix < 3; ix++) {
boardHtml += "<tr>";

  for (let jx = 0; jx < 3; jx++) {
      boardHtml += makeColumnHtml(`${ix}_${ix}`, "_");
    }

  boardHtml += "</tr>";
}

board.innerHTML = boardHtml;
}

init();

/*
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

if(winGame()) {
  winGame();
}

if(c && r) {
  
}
*/
