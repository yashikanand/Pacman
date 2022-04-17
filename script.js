var x;
var y;
var face;
var input;

function getVal() {
  input = document.getElementById("input").value;
  console.log(input);
  document.getElementById("input").value = "";
}

window.onload = function () {
  document.getElementById("input-submission").onclick = function () {
    getVal();
  };
};
