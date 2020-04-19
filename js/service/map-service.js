export const mapService = {
    initMap,
    onSearchLocation,
    // getFromStorage,
    // saveToStorage,
    // getRandomInt
}

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


var gLocations = [];

function getNewLocation() {
    let newLocation = document.querySelector('.search-location').value;
    onAddLocation(gLocations);
    renderLocationTitle(newLocation);
}

function renderLocationTitle(txt) {
    let title = document.querySelector('.location');
    return title.innerText = txt;
}

function onAddLocation(location) {
    return gLocations.push(location);
}


// Getting the user search input


function onSearchLocation() {
    let elSearchBoxVal = document.querySelector('.search-location').value;
    console.log(elSearchBoxVal)
}