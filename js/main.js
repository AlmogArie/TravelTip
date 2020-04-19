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

function onAddLocation(location){
  return  gLocations.push(location);
}