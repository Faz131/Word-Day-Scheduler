// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var pastInput = $('.past');
var presentIput = $('.present');
var futureInput = $('.future');
var timeDisplayEl = $('#currentTime');

function displayTime() {
  var currentTime = dayjs().format('HH:mm:ss a');
  timeDisplayEl.text(currentTime);
}




// Add the event listener that will save to local storage on click



// 9am Time Block

$('#saveBtn9am').click(function () {
  let text9am = $('#textArea9am').val();
  console.log('9am', text9am);
  // localStorage.setItem('9am', textPast);

  localStorage.setItem('9am', JSON.stringify(text9am));
});


document.getElementById('textArea9am').innerHTML
  = JSON.parse(localStorage.getItem('9am'));


// 10am Time Block


$('#saveBtn10am').click(function () {
  let text10am = $('#textArea10am').val();
  console.log('10am', text10am);
  localStorage.setItem('10am', JSON.stringify(text10am));
});

document.getElementById('textArea10am').innerHTML =
  JSON.parse(localStorage.getItem('10am'));


// 11am Time Block
$('#saveBtn11am').click(function () {
  let textPresent = $('#textArea11am').val();
  console.log('11am', textPresent);
  localStorage.setItem('11am', JSON.stringify(textPresent));
});

document.getElementById('textArea11am').innerHTML =
  JSON.parse(localStorage.getItem('11am'));

// 12pm Time Block
$('#saveBtn12pm').click(function () {
  let textPresent = $('#textArea12pm').val();
  console.log('12pm', textPresent);
  localStorage.setItem('12pm', JSON.stringify(textPresent));
});

document.getElementById('textArea12pm').innerHTML =
  JSON.parse(localStorage.getItem('12pm'));

// 1pm Time Block
$('#saveBtn1pm').click(function () {
  let textPresent = $('#textArea1pm').val();
  console.log('1pm', textPresent);
  localStorage.setItem('1pm', JSON.stringify(textPresent));
});

document.getElementById('textArea1pm').innerHTML =
  JSON.parse(localStorage.getItem('1pm'));

// 2pm Time Block
$('#saveBtn2pm').click(function () {
  let textPresent = $('#textArea2pm').val();
  console.log('2pm', textPresent);
  localStorage.setItem('2pm', JSON.stringify(textPresent));
});

document.getElementById('textArea2pm').innerHTML =
  JSON.parse(localStorage.getItem('2pm'));

// 3pm Time Block
$('#saveBtn3pm').click(function () {
  let textPresent = $('#textArea3pm').val();
  console.log('3pm', textPresent);
  localStorage.setItem('3pm', JSON.stringify(textPresent));
});

document.getElementById('textArea3pm').innerHTML =
  JSON.parse(localStorage.getItem('3pm'));


// 4pm Time Block
$('#saveBtn4pm').click(function () {
  let textPresent = $('#textArea4pm').val();
  console.log('4pm', textPresent);
  localStorage.setItem('4pm', JSON.stringify(textPresent));
});

document.getElementById('textArea4pm').innerHTML =
  JSON.parse(localStorage.getItem('4pm'));

// 5pm Time Block
$('#saveBtn5pm').click(function () {
  let textPresent = $('#textArea5pm').val();
  console.log('5pm', textPresent);
  localStorage.setItem('5pm', JSON.stringify(textPresent));
});

document.getElementById('textArea5pm').innerHTML =
  JSON.parse(localStorage.getItem('5pm'));

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM, D'));


// Working on creating a function that used the time-block class to assign color based on currenttime

$('.time-block').each(
  function () {

    if ($(this).data('hour') < today.hour()) {


      $(this).addClass('past');

    } else if ($(this).data('hour') === today.hour()) {



      $(this).addClass('present');

    } else {



      $(this).addClass('future');

    }

  }

)


displayTime()
setInterval(displayTime, 1000);


