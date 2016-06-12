$("document").ready(function(){

	//var meetUpAPIKey = "3f532b1a5c6866f6c42697955472d6d";
	var meetUpURL = "http://api.meetup.com/2/open_events?zip=78702&and_text=True&offset=0&city=austin&format=json&limited_events=False&topic=dogs&photo-host=public&page=10&radius=10.0&desc=False&status=upcoming&sig_id=206912518&sig=6405950ab1b45f4fe76b28e6bc80df77877dcbe7"

	var meetUpEvents = function() {

		$.ajax ({
			url: meetUpURL,
			method: 'GET'
		})
		.done(function(response) {
			var results = response.results[10];
			console.log(results);

			//for (var i = 0; i < results.length; i++) {
				//results[i];
			//	console.log(results[i]);
			//}
			//console.log(response);
			//console.log(response.results[12]);

		});
	};

	meetUpEvents();
});