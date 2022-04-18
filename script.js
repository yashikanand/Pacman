var x;
var y;
var face;
var input;

/* Function to store the input received from the form input field */
function getInput() {
  input = document.getElementById("input").value;
  document.getElementById("input").value = "";
}

function processInput(input) {
  var data = input.split(" ");
  data[0] = data[0].toUpperCase();
  switch (data[0]) {
    case "PLACE":
      console.log(0);
      setInputAcceptanceVal("Input Accepted");
      break;
    case "MOVE":
      console.log(1);
      break;
    case "LEFT":
      console.log(2);
      break;
    case "RIGHT":
      console.log(3);
      break;
    case "REPORT":
      console.log(4);
      break;
    default:
      setInputAcceptanceVal("Input Ignored");
  }
}

/* Function to show the value when submit button is clicked */
function setInputAcceptanceVal(value) {
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
