// In acest fisier sta logica pentru a face fetch-ul catre API-ul de vreme curenta, parsarea datelor primite de la API si inserarea datelor in HTML

function displayCurrentWeather(city) {
    // Se genereaza link-ul pentru a primi date despre vremea curenta
    const currentWeatherEndpoint  = getCurrentWeatherEndpoint(city);

    fetch(currentWeatherEndpoint)
        .then(response => response.json())
        .then((data) => {
            const { name, dt, main, weather, wind, sys} = data;

            const day = getDayOfTheWeek(dt);
            const hour = getHour(dt);
            const sunrise = getHour(sys.sunrise);
            const sunset = getHour(sys.sunset);

            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main['feels_like']);
            const humidity = main.humidity;

            // weather este un array cu un singur element
            const weatherDescription = weather[0].description;
            const windSpeed = Math.round(windToKmPerHour(wind.speed));
            const weatherIcon = getWeatherIcon(weather[0].icon);
        

            const currentWeatherContainer=document.querySelector('.current-weather');
            currentWeatherContainer.innerHTML = `
                <div class="px-3">
                    <div class="fs-2 mb-2"><strong>${name}</strong></div>
                    <div class="fs-4"><strong>${day}</strong>, ${hour}</div>
                    <div class="d-flex align-items-center justify-content-center">
                        <strong class="fs-1">${temperature}°C</strong>
                        <img src="${weatherIcon}"/>
                    </div>
                </div>
                <div class="px-3">
                    <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
                    <div class="fs-5 text-capitalize">
                        <strong>${weatherDescription}</strong>
                    </div>
                </div>
                <div class="px-3">
                    <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong>
                    <p class="fs-5">Umiditate: <strong>${humidity}%</strong></p>
                </div>
                <div class="px-3">
                    <p class="fs-5">Răsărit: <strong>${sunrise}</strong>
                    <p class="fs-5">Apus: <strong>${sunset}</strong></p>
                </div>
            `;
        })
}
