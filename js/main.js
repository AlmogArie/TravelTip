
import {mapService} from './service/map-service.js'

var gElLocation = document.querySelector('.location span');
var gUserPosition = {
  lat: '',
  lng: ''
}

window.addEventListener('load', init)


function init() {
  bindEvents();
  getUserLocation();

}

// define elLocation
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    gElLocation.innerHTML = "Geolocation is not supported by this browser.";
  }

  
}


function initMap(position) {
  // The location of Uluru
  //var uluru = {lat: -25.344, lng: 131.036};
  //User Location:
  gUserPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: gUserPosition});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: gUserPosition, map: map});
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
    console.log('position: ', position);
  
  // gElLocation.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;
}


