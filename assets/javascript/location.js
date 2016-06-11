$("document").ready(function(){

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