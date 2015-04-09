var map = L.map('map').setView([25.657,-100.386,14], 14);

L.tileLayer('https://{s}.tiles.mapbox.com/v4/miguelsalazar.lk959agn/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlndWVsc2FsYXphciIsImEiOiI1aC1PbDc0In0.7XFoN0VYeyfCYaxu0iobuQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'miguelsalazar.lk959agn'
}).addTo(map);