$('document').ready(function(){
	//hide popups
	$(".popupDiv").hide();
	//name of submit button
	$(".sendThisAlready").on("click",function(){
		console.log("click!!");
		//capture input values
		var customerEmail = $("#emailCapture").val();
		var num1 = $("#num1").val();
		var num2 = $("#num2").val();
		var num3 = $("#num3").val();

		console.log(customerEmail);
		console.log(num1 + num2 + num3);
		//var to post to html warning div
		var responseMessage;
		//prevent page refresh
		event.preventDefault();

		if(customerEmail.indexOf("@")== -1 || customerEmail.indexOf(".")==- 1){
			responseMessage = "Please enter a valid e-mail address";
			console.log(responseMessage);	
			$(".popupDivEmail").html(responseMessage);
			$(".popupDivEmail").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 2000);
				function hideDiv(){
					$(".popupDivEmail").hide(600);
				};
			});
		}else if(num1.length<3 || num2.length<3 || num3.length<4){
			responseMessage = "Please complete your phone number";
			console.log(responseMessage);
			$(".popupDivPhone").html(responseMessage);
			$(".popupDivPhone").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 2000);
				function hideDiv(){
					$(".popupDivPhone").hide(600);
				};
			});
		}else{
			responseMessage = "Reservation Sent! We'll contact you shortly to confirm your stay at Dog Haüs"
			console.log(responseMessage);
			$(".popupDivSuccess").html(responseMessage);
			$(".popupDivSuccess").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 3000);
				function hideDiv(){
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