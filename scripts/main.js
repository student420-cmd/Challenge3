// JavaScript Document
var lng = 4.324490;
var lat = 52.067115;
var map = document.getElementById('map') ;
fetchWeather(lat,lng);

function randomLocation(){
	lng = Math.random() * (89 - -89) -89;
	lat = Math.random() * (89 - -89) -89;
	loadMap();
	fetchWeather(lat,lng);
}
function loadMap(){
	mapboxgl.accessToken = 'pk.eyJ1IjoidGJydWluZXMiLCJhIjoiY2ttdnJoYThyMDg0NDJ3bjFkeTdreWRrdSJ9.C3qFLjgzQQcL5EVeDThjpg';
	map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11' ,
				center: [lng, lat], // starting position [lng, lat]
				zoom: 16.5,
			});
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
	console.log(name,icon,description,temp, country, humidity);
	document.querySelector(".city").innerText = "Het weer in " + name ;
	document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + "@4x.png";
	document.querySelector(".description").innerText = description;
	document.querySelector(".temp").innerText = temp + "ºC";
}