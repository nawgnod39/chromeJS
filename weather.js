const API_KEY ="7f73d4d1c949a39dc8eceb1c1b74c286";
const COORDS ='coords';


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    console.log(position);
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log('cant access geo location');

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){

    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords===null){
        askForCoords();
    }else{
        //getWeather
    }

}

function init (){
    loadCoords();
}

init();


