function Add() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("Result").innerText = num1 + num2;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function Subtract() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("Result").innerText = num1 - num2;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function Multiply() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("Result").innerText = num1 * num2;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function Divide() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("Result").innerText = num1 / num2;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
