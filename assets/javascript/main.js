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

	            $(".weatherDiv").html("<h4> Current Weather : " + currentWeatherCondition +  ". Current Temperature : " + twoDigitTemp + " "+ "&#x2109"+  "</h4>");
	        }

	        convertFah();//call conversion function

		});//end ajax

	};//end getWeatherData

	getWeatherData(); //call function


	// Google Maps API
/*
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
	
	*/

	/***	ANIMSITION	***/

	$(".animsition").animsition({
    inClass: 'fade-in-left',
    outClass: 'fade-out-left',
    inDuration: 1500,
    outDuration: 800,
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

});// End document.ready