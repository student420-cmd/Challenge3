
// JavaScript Document
var lng = 4.324490;
var lat = 52.067115;
var map = document.getElementById('map') ;
var level = 15;
fetchWeather(lat,lng, level);

// Functie voor willekeurig teleporteren over de hele wereld.
function randomLocation(){
	lng = Math.random() * (89 - -89) -89;
	lat = Math.random() * (89 - -89) -89;
	level = 3;
	loadMap();
	fetchWeather(lat,lng, level);
	
}
// Elke location kan een nummer hebben die staat voor een plaats. 
function teleportLocation(location){
	if (location == 1){
		lng = 4.324490;
		lat = 52.067115;
		level = 15;
	}
	else if (location == 2){
		lng = 4.760830;
		lat = 52.309269;
		level = 15;
	}
	else if (location == 3){
		lng = -80.011887;
		lat = 40.696941;
		level = 14;
	}
	else if (location == 4){
	    lng = -95.934525;
		lat = 36.746384;
		level = 18;
	}
	loadMap();
	fetchWeather(lat, lng, level);
}
function loadMap(){
	mapboxgl.accessToken = 'pk.eyJ1IjoidGJydWluZXMiLCJhIjoiY2ttdnJoYThyMDg0NDJ3bjFkeTdreWRrdSJ9.C3qFLjgzQQcL5EVeDThjpg';
	map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11' ,
				center: [lng, lat], // starting position [lng, lat]
				zoom: level,
			});
	var marker2 = new mapboxgl.Marker({ color: 'red' })
.setLngLat([lng, lat])
.addTo(map)
}
function fetchWeather (lat, lng){
	fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&units=metric&lang=nl&appid=4f5eee36dffd8b834b717b6ebc5b74ea').then((response) => response.json()).then((data) => this.displayWeather(data));
}
function displayWeather (data){
	const { name } = data;
	const { icon, description } = data.weather[0];
	const { temp } = data.main;
	const { country } = data.sys;
	const { humidity } = data.main;
	const { speed } = data.wind;
	console.log(name,icon,description,temp, country, humidity);
	document.querySelector(".city").innerText = "Het weer in " + name ;
	document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
	document.querySelector(".description").innerText = description;
	document.querySelector(".temp").innerText = temp + "ºC";
	document.querySelector(".humidity").innerText = "Luchtvochtigheid = " + humidity + "%";
	document.querySelector(".speed").innerText = "Windsnelheid " + speed + " km/h";
	
}