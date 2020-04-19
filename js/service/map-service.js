export const mapService = {
    
    search
    // getFromStorage,
    // saveToStorage,
    // getRandomInt
}



function search(place) {
    console.log('place: ', place);
    
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