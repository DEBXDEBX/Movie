"use strict";
//The start of program exicution.
window.onload = function() {
  startUp();
};
//Start Up
function startUp() {}





let showTimeHour = document.querySelector("#showTimeHour");
let  showTimeMinute= document.querySelector("#showTimeMinute");
let movieLengthHour = document.querySelector("#movieLengthHour");
let movieLengthMinute = document.querySelector("#movieLengthMinute");
let  previewLengthMinute= document.querySelector("#previewLengthMinute");
let calculateButton = document.querySelector("#calculateButton");
let endTimeOutput = document.querySelector("#endTimeOutput");


calculateButton.addEventListener("click", (e) => {

  let totalHours = 0;
  let totalMinutes =0; 

  // and show time and show length
  totalHours =  Number(showTimeHour.value) + Number(movieLengthHour.value);
  totalMinutes =  Number(showTimeMinute.value) + Number(movieLengthMinute.value);

  // Check for minutes over or equal to 60
  if(totalMinutes >= 60){
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(previewLengthMinute.value); 

  // Second check for minutes over or equal to 60
  if(totalMinutes >= 60){
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Check if Hours > 12 { timeHours -12}
  if(totalHours > 12){
     totalHours = totalHours - 12;
  };

// output


if(totalMinutes < 10){
totalMinutes = '0' +totalMinutes;
}


endTimeOutput.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;

});