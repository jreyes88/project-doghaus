$("document").ready(function(){

	/***************
	 WEATHER API
	****************/
		var weatherAPIkey = 'fc43f12d67fa7ee0b9bbb0d14b7111ed';
		var weatherURL = "http://api.openweathermap.org/data/2.5/forecast/city?id=4671654&APPID="+weatherAPIkey;

	var getWeatherData = function(){

		$.ajax({
			url: weatherURL,
			method: 'GET'
		}).done(function(response){
			//traverse JSON to desired weather description
			var currentWeatherCondition = response.list[0].weather[0].description;

			//function to capitalize first letter of weather description
			function titleCase(str) {  
  			str = str.toLowerCase().split(' ');
 			 for(var i = 0; i < str.length; i++){
   			 	str[i] = str[i].split('');
    			str[i][0] = str[i][0].toUpperCase(); 
    			str[i] = str[i].join('');
 				 }
  				return str.join(' ');
				};

			//store capital-corrected description as variable
			var curWeaConCaps = titleCase(currentWeatherCondition);

			//traverse response JSON, get temperature. Default unit = kelvin
			var kelvinTemp = response.list[0].main.temp;
	        //convert Kelvin degrees to Farenheight degrees
	        function convertFah() {
	            var newTemp = kelvinTemp - 273.15;
	            var newNewTemp = newTemp * 1.80;
	            var finalTemp = newNewTemp + 32;
	            //get converted value, round down
	            var finalTempRounded = Math.floor(finalTemp);
	            //stringify values for html appendation
	            var finalTempString = finalTempRounded.toString();
	            //post temperature to page
	            $(".weatherDiv").html("<p class='text-muted'> Weather Conditions at Dog Haüs : " +  curWeaConCaps + ", " + finalTempString + " "+ "&#x2109" + "</p>");
	        }

	        convertFah();//call conversion + rounding + posting function

		});//end ajax

	};//end getWeatherData

	getWeatherData(); //call function to run all weather sub-functions

	/***************
		ANIMSITION
	****************/

	$(".animsition").animsition({
    inClass: 'fade-in-left',   // in and out directions
    outClass: 'fade-out-left',
    inDuration: 700,	//in and out durations in miliseconds
    outDuration: 400,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

	/************	
	 BURGER MENU		
	************/

	$(".burgerMenu").hide();
	$(".hamburger").on("click", function(){
		$(".burgerMenu").slideToggle("slow");
	});

});// End document.ready