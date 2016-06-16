$("document").ready(function(){

	//var meetUpAPIKey = "3f532b1a5c6866f6c42697955472d6d";
	var meetUpURL = "https://api.meetup.com/2/open_events?zip=78702&and_text=False&offset=0&format=json&limited_events=False&topic=dogs&photo-host=public&page=10&radius=10.0&desc=False&status=upcoming&sig_id=206912518&sig=58c03d72bba43d142d9132fa375b4e2b60ea30b4";
	
	function meetupCORSRequest(method, url){
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {
			xhr.open(method, URL, true);
		} else if (typeof XDomainRequest !="undefined") {
			xhr = new XDomainRequest();
			xhr.open(method, URL);
		} else {
			xhr = null;
		}
		return xhr;
	};

	function makeCORSRequest() {
		var meetUpURL = "https://api.meetup.com/2/open_events?zip=78702&and_text=False&offset=0&format=json&limited_events=False&topic=dogs&photo-host=public&page=10&radius=10.0&desc=False&status=upcoming&sig_id=206912518&sig=58c03d72bba43d142d9132fa375b4e2b60ea30b4";
		var xhr = meetupCORSRequest('GET', meetUpURL);

		if (!xhr) {
			console.log("CORS not supported");
			return;
		}
	meetUpEvents(meetUpURL)
	//	xhr.onload = function(){
	//		meetUpEvents()
	//	};
	};
	
	var meetUpEvents = function(meetUpURL) {
		//console.log('works')

		$.ajax ({
			url: meetUpURL,
			method: 'GET'
		})
		.done(function(response) {
			var eventResults = response.results[0].group.name;
			console.log(eventResults);

			//for (var i = 0; i < results.length; i++) {
				//results[i];
			//	console.log(results[i]);
			//}
			//console.log(response);
			//console.log(response.results[12]);

		});
	};

	makeCORSRequest();
	//meetUpEvents();
});