$("document").ready(function(){

	$(".commentMSG").hide(); //hide notification div on initial load
	// Firebase as variable for Comment Submission
	var commentData = new Firebase("https://project-doghaus.firebaseio.com/");

	$("#submitButton").on("click", function() {
		
		// Get the input values
		var commentName = $('#inputName').val().trim();
		var commentComment = $('#inputMessage').val().trim();

		// set comment and commenter
		commentData.set({
			commenter: commentName,
			comment: commentComment
		});

		//in same on click function after user data set in firebase, notify user
		$(".commentMSG").html("Thank you! Your comment has been sent!");
		//fade in 0.6 seconds, display message for 2.5 seconds, fade out 0.6 seconds
		$(".commentMSG").show(600, function(){
				timeoutID = window.setTimeout(hideDiv, 2500);
				function hideDiv(){
					$(".commentMSG").hide(600);
				};
			});

		// Return False to allow "enter", prevent reload of page
		return false;
	});


	// Map
	function initMap() {
		var myLatLng = {lat: 30.26716, lng: -97.72662};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: myLatLng
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});

		var contentString = '<div id="content">'+'<div id="siteNotice">'+'</div>'+'<h3 id="firstHeading" class="firstHeading">Dog Haüs, Austin, TX</h1>'+'<div id="bodyContent">'+'<p><b>909 Navasota St, Austin, TX 78702</b>';


			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		};

	initMap();
});