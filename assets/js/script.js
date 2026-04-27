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

  if (el.movieTitle.value === "") {
    el.endTimeOutput.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
  } else {
    el.endTimeOutput.innerHTML = `<p> ${el.movieTitle.value} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});

el.calculateButton2.addEventListener("click", (e) => {
  let totalHours = 0;
  let totalMinutes = 0;

  // and show time and show length
  totalHours =
    Number(el.showTimeHour2.value) + Number(el.movieLengthHour2.value);
  totalMinutes =
    Number(el.showTimeMinute2.value) + Number(el.movieLengthMinute2.value);

  // Check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(el.previewLengthMinute2.value);

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

  if (el.movieTitle2.value === "") {
    el.endTimeOutput2.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
  } else {
    el.endTimeOutput2.innerHTML = `<p> ${el.movieTitle2.value} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});
