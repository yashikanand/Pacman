const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

/* Variables to store the location of the Pacman */
var x;
var y;
var faceDirection;

/* Variable to store user input in the form*/
var input;

/* Function to store the input received from the form input field */
function getInput() {
  input = document.getElementById("input").value;
  document.getElementById("input").value = "";
}

/* Function to check if the Pacman is placed. */
function isPacmanValid() {
  if (x == undefined || y == undefined) {
    setInputAcceptanceVal("Input Ignored");
    return false;
  }
  return true;
}

/* Function to check if the coordinates of Pacman are on grid. */
function areCoordinatesValid(x, y) {
  if (x >= 0 && x <= 5 && y >= 0 && y <= 5) {
    return true;
  }
  return false;
}

/* Function to set the Pacman on the grid */
function placePacman(location) {
  var coordinates = location.split(",");
  if (areCoordinatesValid(coordinates[0], coordinates[1])) {
    if (directions.includes(coordinates[2])) {
      x = parseInt(coordinates[0]);
      y = parseInt(coordinates[1]);
      faceDirection = coordinates[2];
      setInputAcceptanceVal("Input Accepted");
    } else {
      setInputAcceptanceVal("Input Ignored");
    }
  } else {
    setInputAcceptanceVal("Input Ignored");
  }
}

/* Function to move the Pacman one step in the facing direction  */
function movePacman() {
  if (isPacmanValid()) {
    if (faceDirection == "NORTH" && areCoordinatesValid(x, y + 1)) {
      y += 1;
    } else if (faceDirection == "SOUTH" && areCoordinatesValid(x, y - 1)) {
      y -= 1;
    } else if (faceDirection == "EAST" && areCoordinatesValid(x + 1, y)) {
      x += 1;
    } else if (faceDirection == "WEST" && areCoordinatesValid(x - 1, y)) {
      x -= 1;
    } else {
      setInputAcceptanceVal("Input Ignored");
      return;
    }
    setInputAcceptanceVal("Input Accepted");
  } else {
    setInputAcceptanceVal("Input Ignored");
  }
}

/* Function to change the direction of the Pacman facing */
function changePacmanDirection(turn) {
  var tempDirection;
  if (isPacmanValid()) {
    if (turn == "LEFT") {
      if (faceDirection == "NORTH") {
        tempDirection = "WEST";
      }
      if (faceDirection == "WEST") {
        tempDirection = "SOUTH";
      }
      if (faceDirection == "SOUTH") {
        tempDirection = "EAST";
      }
      if (faceDirection == "EAST") {
        tempDirection = "NORTH";
      }
    }
    if (turn == "RIGHT") {
      if (faceDirection == "NORTH") {
        tempDirection = "EAST";
      }
      if (faceDirection == "WEST") {
        tempDirection = "NORTH";
      }
      if (faceDirection == "SOUTH") {
        tempDirection = "WEST";
      }
      if (faceDirection == "EAST") {
        tempDirection = "SOUTH";
      }
    }
    placePacman(x + "," + y + "," + tempDirection);
  }
}

/* Function to give the output of the location of the Pacman. */
function reportPacman() {
  if (isPacmanValid()) {
    var output = x + "," + y + "," + faceDirection;
    setOutput(output);
    setInputAcceptanceVal("Input Accepted");
  }
}

/* Function to process the input according to the keywords entered */
function processInput(input) {
  input = input.toUpperCase();
  var data = input.split(" ");
  switch (data[0]) {
    case "PLACE":
      placePacman(data[1]);
      break;
    case "MOVE":
      movePacman();
      break;
    case "LEFT":
      changePacmanDirection("LEFT");
      break;
    case "RIGHT":
      changePacmanDirection("RIGHT");
      break;
    case "REPORT":
      reportPacman();
      break;
    default:
      setInputAcceptanceVal("Input Ignored");
  }
}

/* Function to show the value when submit button is clicked */
function setInputAcceptanceVal(value) {
  if (value == "Input Ignored") {
    setOutput("");
  }
  var element = document.getElementById("input-acceptance");
  element.innerText = value;
}

/* Function to set the ouput when the report keyword is called */
function setOutput(output) {
  var element = document.getElementById("output-received");
  element.innerText = output;
}

/* The start of the script which captures the input on submit button click */
window.onload = function () {
  const form = document.getElementById("input-area");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getInput();
    processInput(input);
  });
};
