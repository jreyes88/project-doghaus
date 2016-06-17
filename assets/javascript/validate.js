$('document').ready(function(){

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
		}else if(num1.length<3 || num2.length<3 || num3.length<4){
			responseMessage = "Please complete your phone number";
			console.log(responseMessage);
		}

	});
});//end document ready