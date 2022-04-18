var x;
var y;
var faceDirection;
var input;
const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

/* Function to store the input received from the form input field */
function getInput() {
  input = document.getElementById("input").value;
  document.getElementById("input").value = "";
}

function isPacmanValid() {
  if (x == undefined || y == undefined) {
    setInputAcceptanceVal("Input Ignored");
    return false;
  }
  return true;
}

function placePacman(location) {
  var coordinates = location.split(",");
  if (
    coordinates[0] >= 0 &&
    coordinates[0] <= 5 &&
    coordinates[1] >= 0 &&
    coordinates[1] <= 5
  ) {
    x = parseInt(coordinates[0]);
    y = parseInt(coordinates[1]);
    if (directions.includes(coordinates[2])) {
      faceDirection = coordinates[2];
      setInputAcceptanceVal("Input Accepted");
    } else {
      setInputAcceptanceVal("Input Ignored");
    }
  } else {
    setInputAcceptanceVal("Input Ignored");
  }
}

function movePacman() {
  if (faceDirection == "NORTH" && y >= 0 && y < 5) {
    y += 1;
  } else if (faceDirection == "SOUTH" && y > 0 && y <= 5) {
    y -= 1;
  } else if (faceDirection == "EAST" && x >= 0 && x < 5) {
    x += 1;
  } else if (faceDirection == "WEST" && x > 0 && x <= 5) {
    x -= 1;
  } else {
    setInputAcceptanceVal("Input Ignored");
    return;
  }
  setInputAcceptanceVal("Input Accepted");
}

function changePacmanDirection(turn) {
  if (isPacmanValid()) {
    /* TO DO */
    setInputAcceptanceVal("Input Accepted");
  }
}

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
