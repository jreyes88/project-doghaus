$('document').ready(function(){

	//Firebase as a variable
	var theMasterBase = new Firebase("https://project-doghaus.firebaseio.com/");
	//hide all popups/modals on page load
	$(".popupDiv").hide();
	//on click of awesomely named submit button
	$(".sendThisAlready").on("click",function(){
		//capture user input values
		var customerEmail = $("#emailCapture").val();
		var num1 = $("#num1").val();
		var num2 = $("#num2").val();
		var num3 = $("#num3").val();
		var firstName = $(".guestName1").val();
		var lastName = $(".guestName2").val();
		//temporarily empty var to post to html warning div
		var responseMessage;
		//prevent page refresh
		event.preventDefault();

		//validation. Test to make sure email field contains both " @ " and " . "
		if(customerEmail.indexOf("@")== -1 || customerEmail.indexOf(".")==- 1){
			responseMessage = "Please enter a valid e-mail address";
			$(".popupDivEmail").html(responseMessage);
			$(".popupDivEmail").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 2000);
				function hideDiv(){
					$(".popupDivEmail").hide(600);
				};
			});
		}else if /*Test if all phone numbers filled by length*/  (num1.length<3 || num2.length<3 || num3.length<4){
			responseMessage = "Please complete your phone number";
			$(".popupDivPhone").html(responseMessage);
			$(".popupDivPhone").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 2000);
				function hideDiv(){
					$(".popupDivPhone").hide(600);
				};
			});
		}else /*If both tests pass*/{
			//store values as object for firebase
			var newReservationContactInfo = {
				name1:firstName,
				name2:lastName,
				email: customerEmail,
				phone: num1+num2+num3
			}
			//send to firebase
			theMasterBase.push(newReservationContactInfo);
			//notify user via new html value
			responseMessage = "Reservation Sent! We'll contact you shortly to confirm your stay at Dog Haüs"
			$(".popupDivSuccess").html(responseMessage);
			$(".popupDivSuccess").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 3000);
				function hideDiv(){
					//after timeout hide div and set user input fields to default 
					$(".popupDivSuccess").hide(600);
					$(".threeNum").val("");
					$(".fourNum").val("");
					$("#emailCapture").val("");
					$(".guestName").val("");
				};
			});
		}

	});
});//end document ready