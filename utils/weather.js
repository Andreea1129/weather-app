// Ne declaram alte functii utilitare pe care o sa le folosim pentru a parsa viteza vantului si iconita
function windToKmPerHour (windPerMeters){
    // Noi de la API primim viteza vantului in m/s si vrem sa o transformam in km/h
    return (windPerMeters * 3600) / 1000;
}

function getWeatherIcon (iconCode){
    // Noi de la API primim un cod pentru iconita si ne folosim de url-ul de la OpenWeather dedicat iconitelor
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}