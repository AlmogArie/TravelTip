const API_KEY = 'AIzaSyDiMp5dCfqfJAT1L3d746Z-gAb9T9qitFU';


export const mapService = {
    search
    // getFromStorage,
    // saveToStorage,
    // getRandomInt
}

var gLocations = [];


function search(place) {
    // gLocations.push(place);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${API_KEY}`)
        .then(loc => loc.data.results[0].geometry.location)
        .then(cords => gLocations.push({
            name:place,
            id: 100,
            lat: cords.lat,
            lng: cords.lng
        }))
        .then(()=> console.log(gLocations))

}


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


