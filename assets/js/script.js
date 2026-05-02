"use strict";
//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {}

// create elements object
const el = new Elements();
let btnAudio = document.querySelector("#btnAudio");

el.calculateButton.addEventListener("click", (e) => {
  btnAudio.play();
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
    let str = el.movieTitle.value;
    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
    el.endTimeOutput.innerHTML = `<p> ${str} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});

el.calculateButton2.addEventListener("click", (e) => {
  btnAudio.play();
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
    let str = el.movieTitle2.value;

    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
    el.endTimeOutput2.innerHTML = `<p> ${str} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});

el.calculateButton3.addEventListener("click", (e) => {
  btnAudio.play();
  let totalHours = 0;
  let totalMinutes = 0;

  // and show time and show length
  totalHours =
    Number(el.showTimeHour3.value) + Number(el.movieLengthHour3.value);
  totalMinutes =
    Number(el.showTimeMinute3.value) + Number(el.movieLengthMinute3.value);

  // Check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(el.previewLengthMinute3.value);

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

  if (el.movieTitle3.value === "") {
    el.endTimeOutput3.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
  } else {
    let str = el.movieTitle3.value;

    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
    el.endTimeOutput3.innerHTML = `<p> ${str} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});

el.calculateButton4.addEventListener("click", (e) => {
  btnAudio.play();
  let totalHours = 0;
  let totalMinutes = 0;

  // and show time and show length
  totalHours =
    Number(el.showTimeHour4.value) + Number(el.movieLengthHour4.value);
  totalMinutes =
    Number(el.showTimeMinute4.value) + Number(el.movieLengthMinute4.value);

  // Check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(el.previewLengthMinute4.value);

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

  if (el.movieTitle4.value === "") {
    el.endTimeOutput4.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
  } else {
    let str = el.movieTitle4.value;

    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
    el.endTimeOutput4.innerHTML = `<p> ${str} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});
el.calculateButton5.addEventListener("click", (e) => {
  btnAudio.play();
  let totalHours = 0;
  let totalMinutes = 0;

  // and show time and show length
  totalHours =
    Number(el.showTimeHour5.value) + Number(el.movieLengthHour5.value);
  totalMinutes =
    Number(el.showTimeMinute5.value) + Number(el.movieLengthMinute5.value);

  // Check for minutes over or equal to 60
  if (totalMinutes >= 60) {
    totalHours = totalHours + 1;
    totalMinutes = totalMinutes - 60;
  }

  // Add preview length to totals
  totalMinutes = totalMinutes + Number(el.previewLengthMinute5.value);

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

  if (el.movieTitle5.value === "") {
    el.endTimeOutput5.innerHTML = `<p> Movie ends at ${totalHours}:${totalMinutes}</p>`;
  } else {
    let str = el.movieTitle5.value;

    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
    el.endTimeOutput5.innerHTML = `<p> ${str} ends at ${totalHours}:${totalMinutes}</p>`;
  }
});
