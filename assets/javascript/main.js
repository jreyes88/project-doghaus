$("document").ready(function(){
	console.log("JS and jQuery is linked and working");// Confirm JS

	/***  GLOBAL VARIABLES  ***/
		// Declare vars here
		var weatherAPIkey = 'fc43f12d67fa7ee0b9bbb0d14b7111ed';
		var weatherURL = "http://api.openweathermap.org/data/2.5/forecast/city?id=4671654&APPID="+weatherAPIkey;

	var getWeatherData = function(){

		$.ajax({
			url: weatherURL,
			method: 'GET'
		}).done(function(response){
			console.log(response);
			console.log(response.city.name);
			console.log(response.list[1].weather[0]);
			var currentWeatherCondition = response.list[0].weather[0].description;
			console.log(currentWeatherCondition);


			var kelvinTemp = response.list[0].main.temp;
	        console.log(kelvinTemp);
	        
	        
	        function convertFah() {
	            var newTemp = kelvinTemp - 273.15;
	            var newNewTemp = newTemp * 1.80;
	            var finalTemp = newNewTemp + 32;
	            console.log(finalTemp);
	            var finalTempLongString = finalTemp.toString();
	            var twoDigitTemp = finalTempLongString.slice(0,[2]);
	            console.log(twoDigitTemp);

	            $(".weatherDiv").html("<p> Current Weather : " + currentWeatherCondition +  ". Current Temperature : " + twoDigitTemp + " "+ "&#x2109"+  "</p>");
	        }

	        convertFah();//call conversion function

		});//end ajax

	};//end getWeatherData

	getWeatherData(); //call function

});// End document.ready