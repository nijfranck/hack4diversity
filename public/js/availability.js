

$('#rangestart').calendar({
  endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
  startCalendar: $('#rangestart')
});