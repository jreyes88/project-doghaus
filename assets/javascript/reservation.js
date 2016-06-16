//reservation.js

var resData = new Firebase("https://reservationlog.firebaseio.com/");

$(function() {
    $( "#arr_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
    $( "#dep_date" ).datepicker({ dateFormat: 'dd-mm-yy' });
});
$('button').click(function() {
    var start = $('#arr_date').datepicker('getDate');
    var end = $('#dep_date').datepicker('getDate');
    var days = (end - start)/1000/60/60/24;
    $('#res').text("your stay will be $" + (days) * (room.elements["room"].value));
    // console.log(room.elements["room"].value)

	// var trainName =  $('#res').text((days));
	// console.log(start);
	// console.log(end);
	// console.log(days);
	// console.log(res);

	var startInput = (start);
	var endInput = (end);
	var daysInput = (days);
	var resInput = (res);

	// Creates local "temporary" object for holding data
	resData.set({
		start_Date:  startInput,
		end_Date: endInput,
		number_Of_Days: daysInput,
		cost_Of_Stay: resInput
	});

	// var newRes = {
	// 	startInput:  start,
	// 	end: endInput,
	// 	days: daysInput,
	// 	res: resInput
		 
	// }
// 	console.log(newRes);
// 	// console.log(newRes);
// 	// Uploads train data to the database
	
// // alert("successfully added");
// 	// // Uploads train data to the database
// 	// trainData.push(newtrain);
// resData.push(newRes);
// 	// // Logs everything to console
// 	// console.log(newtrain.name);
// 	// console.log(newtrain.destination);
// 	// console.log(newtrain.initialTime);
// 	// console.log(newtrain.minutes)

	return false;
});

resData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var startInput = childSnapshot.val().start;
	var endInput = childSnapshot.val().end;
	var daysInput = childSnapshot.val().days;
	var resInput = childSnapshot.val().res;

// 	// // Employee Info
// 	// console.log(trainName);
// 	// console.log(trainDestination);
// 	// console.log(trainTime);
// 	// console.log(trainMin);
});