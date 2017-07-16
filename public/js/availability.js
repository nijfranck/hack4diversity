availabilityArray = [];

$('#rangeStart').calendar({
  endCalendar: $('#rangeEnd')
});
$('#rangeEnd').calendar({
  startCalendar: $('#rangeStart')
});

// Clears the input fields so that the user can submit more information
function clearInputs() {
  $("#inputStart").val('');
  $("#inputEnd").val('');
}

// Fades in a little message saying that adding the times was successful
function successMessage() {
  $("div.message")
    .text("Successfully added availability!")
    .attr('color', 'green')
    .fadeIn(1000)
    .fadeOut(1200);
}

// Fades in a message giving an error
function errorMessage() {
  $("div.message")
    .text("Error: start or end fields cannot be empty. Please fix before resubmitting!")
    .attr('color', 'red')
    .fadeIn(1000);
}

$("#addThisAvailability").click(function() {
  var startVal = $("#inputStart").val();
  var endVal = $("#inputEnd").val();
  if (startVal === "" || endVal === "") {
    errorMessage();
  } else {
    var dateInfo = {
      start: startVal,
      end: endVal,
    };

    clearInputs();
    successMessage();
    availabilityArray.push(dateInfo);
  }
});
