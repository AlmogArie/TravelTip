
import {mapService} from './service/map-service.js'



window.addEventListener('load', init)


function init() {
  bindEvents();
  getUserLocation();

}


function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    elLocation.innerHTML = "Geolocation is not supported by this browser.";
  }

  initMap();
}


function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}





function bindEvents() {
  
  document.querySelector('.go').addEventListener('click', onSearch);

}

function onSearch() {
  var elSearchInput = document.querySelector('.search-location');
  var placeToSearch = elSearchInput.value;
  mapService.search(placeToSearch)
} 



function showPosition(position) {
  var elLocation = document.querySelector('.location span');
  elLocation.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


