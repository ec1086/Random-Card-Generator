/* eslint-disable */

import "./style.css";

// const numberArray = ["1", "2", "3", "4", "5"];
// const suitArray = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
// function random(array) {
//   return Math.floor(Math.random() * array.length);
// }

//const numberIndex = random(numberArray);
//const suitIndex = random(suitArray);
// const numberValue = numberArray[numberIndex];
// const numberValue = numberArray[random(numberArray)];
// const suitValue = suitArray[random(suitArray)];
window.onload = function() {
  //BigFunc();
  // document.querySelector(".number").innerHTML = numberValue;
  // document.querySelector(".top").innerHTML = suitValue;
  // document.querySelector(".bottom").innerHTML = suitValue;
};

//console.log(suitValue);
//function BigFunc() {
const numberArray = ["1", "2", "3", "4", "5"];
const suitArray = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

function random(array) {
  return Math.floor(Math.random() * array.length);
}
const numberValue = numberArray[random(numberArray)];
const suitValue = suitArray[random(suitArray)];
window.onload = function() {
  document.querySelector(".number").innerHTML = numberValue;
  document.querySelector(".top").innerHTML = suitValue;
  document.querySelector(".bottom").innerHTML = suitValue;
};
//console.log("We are inside the if", suitValue);
if (suitValue == "&hearts;" || suitValue == "&diams;") {
  console.log("We are inside the if", suitValue);
  //document.getElementsByClassName("top").style.color = "red";
  const Element = document.getElementsByClassName("top");
  Element[0].style.color = "red";
  const Color = document.getElementsByClassName("bottom");
  Color[0].style.color = "red";
}
