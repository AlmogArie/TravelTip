
import {mapService} from './service/map-service.js'


window.addEventListener('load', mapService.initMap)

window.addEventListener('load', ()=>{
    document.querySelector('.go').addEventListener('click', ()=>{
        var locationVal = document.querySelector('.search-location').value
        console.log('location' , locationVal);
    });
});


