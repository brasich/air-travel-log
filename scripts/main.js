var map = L.map('map').setView([25, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([34.895556, -82.218889]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");