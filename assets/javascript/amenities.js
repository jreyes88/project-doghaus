$("document").ready(function(){
	//Declare url
	var meetUpURL = "https://api.meetup.com/2/open_events?zip=78702&and_text=False&offset=0&format=json&limited_events=False&topic=dogs&photo-host=public&page=10&radius=10.0&desc=False&status=upcoming&sig_id=206912518&sig=58c03d72bba43d142d9132fa375b4e2b60ea30b4";
	
	var meetUpEvents = function(meetUpURL) {
		//request
		$.ajax ({
			url: meetUpURL,
			dataType: 'jsonp',
		})
		.done(function(response) {
			var eventResults = response.results;
			//once response captured, run loop for each event in response
			for (var i = 0; i < eventResults.length; i++) {
				var groupName = eventResults[i].group.name;
				var groupURL = eventResults[i].event_url;
				var eventName = eventResults[i].name;
				//post group name, event name, and link in table
				$("#meetupTable > tbody").append(
					"<tr><td>" + groupName + "</td><td>" + eventName + "</td><td>" + "<a href='" + groupURL + "'>Link" + "</a>" + "</td></tr"
				);
			};

		});
	};

	
	meetUpEvents(meetUpURL);
});