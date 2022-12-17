// recreate a version of among us in javascript

// Create the game board (an array of strings)
let gameBoard = [
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty"
];

// Create players (an array of objects)
let players = [
  { name: "Player 1", role: "Crewmate", location: 0 },
  { name: "Player 2", role: "Impostor", location: 4 }
];

// Create a function to move players around the board
const movePlayer = (player, newLocation) => {
  if (gameBoard[newLocation] === "empty") {
    gameBoard[player.location] = "empty";
    gameBoard[newLocation] = player.name;
    player.location = newLocation;
    console.log(
      `${player.name} moved to position ${newLocation} on the board.`
    );
  } else {
    console.log(
      `${player.name} could not move to position ${newLocation} on the board.`
    );
  }
};

// Test the movePlayer function
movePlayer(players[0], 3);

// Output
// Player 1 moved to position 3 on the board.