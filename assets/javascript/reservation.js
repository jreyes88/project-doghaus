//reservation.js
$('#res').hide();
var resData = new Firebase("https://reservationlog.firebaseio.com/");

$(function() {
    $( "#arr_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#dep_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
});
$('button').click(function() {
    var start = $('#arr_date').datepicker('getDate');
    var end = $('#dep_date').datepicker('getDate');
    var days = (end - start)/1000/60/60/24;
    //$('#res').text("Your stay will be $" + (days) * (room.elements["room"].value) + "." + "Please fill out the form below to confirm your dates!");
    // console.log(room.elements["room"].value)

	var startInput = (start);
	var endInput = (end);
	var daysInput = (days);
	var resInput = (res);

	var newRes = {
		startInput:  start,
		end: endInput,
		days: daysInput,
		res: resInput
		 
	}
	// Uploads res data to the database

resData.push(newRes);


$('#res').text("Your stay will be $" + (days) * (room.elements["room"].value) + "." + "Please fill out the form below to confirm your dates!");
$("#res").show(1000, function(){
				timeoutID = window.setTimeout(hideDiv, 4000);
				function hideDiv(){
					$("#res").hide(1000);
				};
			});


	return false;
});

resData.on("child_added", function(childSnapshot, prevChildKey){

	// Store everything into a variable.
	var startInput = childSnapshot.val().start;
	var endInput = childSnapshot.val().end;
	var daysInput = childSnapshot.val().days;
	var resInput = childSnapshot.val().res;

});