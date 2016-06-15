$("document").ready(function(){

	/***  GLOBAL VARIABLES  ***/
		// Declare vars here
		var weatherAPIkey = 'fc43f12d67fa7ee0b9bbb0d14b7111ed';
		var weatherURL = "http://api.openweathermap.org/data/2.5/forecast/city?id=4671654&APPID="+weatherAPIkey;

	var getWeatherData = function(){

		$.ajax({
			url: weatherURL,
			method: 'GET'
		}).done(function(response){
			var currentWeatherCondition = response.list[0].weather[0].description;

			function titleCase(str) {  
  			str = str.toLowerCase().split(' ');
 			 for(var i = 0; i < str.length; i++){
   			 	str[i] = str[i].split('');
    			str[i][0] = str[i][0].toUpperCase(); 
    			str[i] = str[i].join('');
 				 }
  				return str.join(' ');
				};

			var curWeaConCaps = titleCase(currentWeatherCondition);

			var kelvinTemp = response.list[0].main.temp;
	        
	        function convertFah() {
	            var newTemp = kelvinTemp - 273.15;
	            var newNewTemp = newTemp * 1.80;
	            var finalTemp = newNewTemp + 32;
	            var finalTempRounded = Math.floor(finalTemp);
	            var finalTempString = finalTempRounded.toString();

	            $(".weatherDiv").html("<p class='text-muted'> Weather Conditions at Dog Haüs : " + "<p class='text-muted'>" +  curWeaConCaps + ", " + finalTempString + " "+ "&#x2109"+  ".</p>" + "</p>");
	        }

	        convertFah();//call conversion function

		});//end ajax

	};//end getWeatherData

	getWeatherData(); //call function

	/***	ANIMSITION	***/

	$(".animsition").animsition({
    inClass: 'fade-in-left',
    outClass: 'fade-out-left',
    inDuration: 700,
    outDuration: 400,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
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

	/***	BURGER MENU		***/

	$(".burgerMenu").hide();
	$(".hamburger").on("click", function(){
		$(".burgerMenu").slideToggle("slow");
	});

});// End document.ready