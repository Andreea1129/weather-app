// Alte functii utilitare folosite pentru a parsa viteza vantului si iconita
function windToKmPerHour (windPerMeters){
    return (windPerMeters * 3600) / 1000;
}

function getWeatherIcon (iconCode){
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}