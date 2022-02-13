"use strict";
//Generating pin
function generatePin() {
  const randomNum = Math.round(Math.random() * 1000000) + "";
  if (randomNum.length == 6) {
    const generateScreen = document.getElementById("generate-screen");
    generateScreen.value = randomNum;
  } else {
    generatePin();
  }
}
//Handle keypad
document.getElementById("calc-body").addEventListener("click", (e) => {
  const number = e.target.innerText;
  let inputNum = document.getElementById("input-num");
  if (isNaN(number)) {
    if (number == "C") {
      inputNum.value = "";
    }
  } else {
    inputNum.value = inputNum.value + e.target.innerText;
  }
});
//Compare pin
function submitBtn() {
  const generatePin = document.getElementById("generate-screen").value;
  const inputPin = document.getElementById("input-num").value;
  const notifySuccess = document.getElementById("notify-success");
  const notifyFailed = document.getElementById("notify-failed");
  if (generatePin == inputPin && generatePin != '') {
    notifySuccess.style.display = "block";
    notifyFailed.style.display = "none";
  } else {
    notifySuccess.style.display = "none";
    notifyFailed.style.display = "block";
  }
}
