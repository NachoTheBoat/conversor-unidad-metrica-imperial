/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

let convertBtn = document.getElementById("convertButton");
let inputEl = document.getElementById("myInput");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  console.log("clicked!");

  let baseValue = inputEl.value;
  let lenghtResult1 = baseValue * meterToFeet;
  let lenghtResult2 = baseValue / meterToFeet;
  let volumeResult1 = baseValue * literToGallon;
  let volumeResult2 = baseValue / literToGallon;
  let massResult1 = baseValue * kiloToPound;
  let massResult2 = baseValue / kiloToPound;

  lengthEl.textContent = `${baseValue} metros = ${lenghtResult1.toFixed(
    3
  )} pies | ${baseValue} pies = ${lenghtResult2.toFixed(3)} metros`;
  volumeEl.textContent = `${baseValue} litros = ${volumeResult1.toFixed(
    3
  )} galones | ${baseValue} galones = ${volumeResult2.toFixed(3)} litros `;
  massEl.textContent = `${baseValue} kilos = ${massResult1.toFixed(
    3
  )} libras | ${baseValue} libras = ${massResult2.toFixed(3)} kilos`;
});
