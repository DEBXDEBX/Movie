"use strict";
//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {}

// create elements object
const el = new Elements();

el.calculateButton.addEventListener("click", (e) => {
  let totalHours = 0;
  let totalMinutes = 0;

  // and show time and show length
  totalHours = Number(el.showTimeHour.value) + Number(el.movieLengthHour.value);
  totalMinutes =
    Number(el.showTimeMinute.value) + Number(el.movieLengthMinute.value);

  // Check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(el.previewLengthMinute.value);

  // Second check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Check if Hours > 12 { timeHours -12}
  if (totalHours > 12) {
    totalHours = totalHours - 12;
  }

  // output

  if (totalMinutes < 10) {
    totalMinutes = "0" + totalMinutes;
  }

  el.endTimeOutput.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
});
