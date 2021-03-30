// JavaScript Document
var lng = 4.324490;
var lat = 52.067115;
var map = document.getElementById('map') ;

function randomLocation(){
	lng = Math.random() * (89 - -89) -89;
	lat = Math.random() * (89 - -89) -89;
	alert(lng + ' ' + lat);
	loadMap();
}
function loadMap(){
	mapboxgl.accessToken = 'pk.eyJ1IjoidGJydWluZXMiLCJhIjoiY2ttdnJoYThyMDg0NDJ3bjFkeTdreWRrdSJ9.C3qFLjgzQQcL5EVeDThjpg';
	map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11' ,
				center: [lng, lat], // starting position [lng, lat]
				zoom: 4,
			});
}