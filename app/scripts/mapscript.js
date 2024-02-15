<!-- map code here -->
{
	 "use strict";
		 
	// base maps
	    const	tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
						maxZoom: 20,
						attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					});


		function popupContent(feature) {
				
				props = feature.properties;
				
				var Type = props["Kind of box"];
				var extra = "";
				var names = ["Robin", "Tawny Owl", "Kestrel", "Treecreeper"];
				if  (names.includes(Type)) {
				extra = " nest box";
				}
				Type = Type + extra;
				var long=feature.geometry.coordinates[1];
				var lat=feature.geometry.coordinates[0];
				var Streetview = '<a target="_blank" alt="Google streetview in separate tab" href="http://maps.google.com/maps?q=' 
				+ long + ',' +  lat + '">Google Streetview &copy;' + '</a>';
				
				const contents = '<b>' + Type + '</b><br/>' + "Number : " + props["Number"] + '<br/>' + "Installed : " + props["Date installed"] + '<br />' + "2022 : " + props["2022"] + '</br/>' + "2023 : " + props["2023"] + '<br/>' + Streetview ;
				
				return contents;
		};
		
		function getColour(feature){
			var boxType = feature.properties["Kind of box"];
			var Col;
			switch(boxType) {
			  case 'Tit box' :
				Col = "#FF0000";
				break;
			  case 'Treecreeper':
				Col = "#FF7F00";
				break;
			  case 'Starling box' :
				Col = "#FFFF00";
				break;
			 case 'Robin' :
				Col = "#84c823";
				break;
			 case 'Kestrel' :
				Col = "#0000FF";
				break;
			 case 'Tawny Owl' :	
				Col = "#4B0082";
				break;
			 case 'Barn owl box' :
				Col = "#9400D3";
				break;
			 case 'Wren/RobinBox' :
				Col = "#000000";
				break;
			default:
				Col = "#00FFFF";
				break;
				}
				return Col
		};
		
		function boxMarker(feature, latlng) {
			 
			 var geojsonMarkerOptions = {
					radius: 4,
					fillColor: getColour(feature),
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8,
					alt: feature.properties["Kind of Box"],
					autoPan : "false"
					};
					// autoPan setting needed to prevent issues with popup
			  return L.circleMarker(latlng, geojsonMarkerOptions);
		};
		
		const boxes = L.geoJSON(data, { pointToLayer: boxMarker,
		                   attribution: 'Nest box data owned on behalf of the community by <a href="https://www.higreenspaces.org/about-us">Histon and Impington Green Spaces</a>',
						    } ).bindPopup(function (layer) {
								  return popupContent(layer.feature);
				   });
				   
				// set up map
		var HisImp = [52.2500, 0.1042];
		var map = L.map('map', {
			center: HisImp,
			zoom: 14,
			// layers which are on by default
			layers: [tiles, boxes]
			});		
			
};