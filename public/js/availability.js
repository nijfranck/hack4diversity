availabilityArray = [];
idCounter = 0;

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
function fadeMessage() {
  $("div.message")
    .addClass("messageFade")
    .text("Successfully added availability!")
    .fadeIn(1000)
    .fadeOut(1200);
}

$("#addThisAvailability").click(function() {
  var dateInfo = {
    start: $("#inputStart").val(),
    end: $("#inputEnd").val(),
  };
  clearInputs();
  fadeMessage();
  availabilityArray.push(dateInfo);
  // Pull information from the start and end input fields
});
