const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floors = document.querySelector('input[name="floor"]');

const totalPriceElement = document.querySelector('#total-price');
const basePrice = 6000;

squareRange.addEventListener('input', function () {
 squareInput.value = squareRange.value;
});
squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
});
 
function calculate() {
 let totalPrice = basePrice * parseInt(squareInput.value);

for (const radio of radioType) {
  if (radio.checked) {
   totalPrice = totalPrice * parseFloat(radio.value); 
  }
};

 for (const radio of radioBuilding) {
  if (radio.checked) {
   totalPrice = totalPrice * parseFloat(radio.value); 
  }
 };
 
 for (const radio of radioRooms) {
  if (radio.checked) {
   totalPrice = totalPrice * parseFloat(radio.value); 
  }
 };

 if (ceilings.checked) {
  totalPrice = totalPrice + parseFloat(ceilings.value) * parseInt(squareInput.value); 
 };
 if (walls.checked) {
  totalPrice = totalPrice * parseFloat(walls.value); 
 };
 if (floors.checked) {
  totalPrice = totalPrice * parseFloat(floors.value); 
 };

 const formatter = new Intl.NumberFormat('ru'); 
 totalPriceElement.innerText = formatter.format(totalPrice); 
};

calculate(); 

for (const input of inputs) {
 input.addEventListener('input', function () {
  calculate();
 })
};



