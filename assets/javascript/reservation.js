 //THIS DOCUMENT REQUIRES MOMENT.JS

 //Hide notification that will contain price estimate on page load
$('#res').hide();
//set firebase variable
var resData = new Firebase("https://reservationlog.firebaseio.com/");

$(function() {
    $( "#arr_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#dep_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
});

//on click, set variables
$('button').click(function() {
    var start = $('#arr_date').datepicker('getDate');
    var end = $('#dep_date').datepicker('getDate');
    var days = (end - start)/1000/60/60/24;

	var startInput = (start);
	var endInput = (end);
	var daysInput = (days);
	var resInput = (res);

	//store new values in object to push to Firebase
	var newRes = {
		startInput:  start,
		end: endInput,
		days: daysInput,
		res: resInput
	}

	// Upload reservation dates to the database
	resData.push(newRes);

	//Once data sent, notify User of Estimates
	//set message
	$('#res').text("Your stay will be $" + (days) * (room.elements["room"].value) + "." + "Please fill out the form below to confirm your dates!");
	//fade in 1 second, show for 4 seconds, fade out 1 second.
	$("#res").show(1000, function(){
				timeoutID = window.setTimeout(hideDiv, 4000);
				function hideDiv(){
					$("#res").hide(1000);
				};
			});


	return false;  //prevent page from refresh
});

resData.on("child_added", function(childSnapshot, prevChildKey){

	// Store everything into a variable.
	var startInput = childSnapshot.val().start;
	var endInput = childSnapshot.val().end;
	var daysInput = childSnapshot.val().days;
	var resInput = childSnapshot.val().res;

});