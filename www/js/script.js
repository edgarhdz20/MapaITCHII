function masInfo(){
    	 	document.location.href = "info.html";
		}

		var iconBase = 'https://maps.google.com/mapfiles/kml/';
  		function initMap() {
  			var mapDiv = document.getElementById('mapa');
    		var map = new google.maps.Map(mapDiv, {
      			center: {lat: 28.708817, lng: -106.106985},
      			zoom: 17
    		});

    		map.set('styles', [
	  			{
	    			featureType: 'road',
	    			elementType: 'geometry',
				    stylers: [
				      { color: '#000000' },
				      { weight: 1.6 }
				    ]
	  			}, {
				    featureType: 'road',
				    elementType: 'labels',
				    stylers: [
				      { saturation: -100 },
				      { invert_lightness: true }
				    ]
				}, {
				    featureType: 'landscape',
				    elementType: 'geometry',
				    stylers: [
				      { hue: '#ffff00' },
				      { gamma: 1.4 },
				      { saturation: 82 },
				      { lightness: 96 }
				    ]
				}, {
				    featureType: 'poi.school',
				    elementType: 'geometry',
				    stylers: [
				      { hue: '#fff700' },
				      { lightness: -15 },
				      { saturation: 99 }
				    ]
				},{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [
					  { visibility: 'off' }
					]
				}, {
				  	featureType: 'poi.school',
					elementType: 'geometry',
					stylers: [
					  { visibility: 'on' },
					  { hue: '#fff700' },
					  { lightness: -15 },
					  { saturation: 99 }
					]
				}
			]);

			var marker = new google.maps.Marker({
	  			position: {lat: 28.707982, lng: -106.105490},
	  			map: map,
  				icon: iconBase + 'paddle/D.png'
			});

			marker.addListener('click', function() {
    		 	$('#info').addClass('infoDialog');
  			});


			map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
		}

		