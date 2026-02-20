// Declar functia pentru afisarea vremii pe urmatoarele 5 zile
function displayWeatherForecast(city) {
  // Generez link-ul de la open weather catre care o sa fac call-ul
  const forecastEndpoint = getForecastEndpoint(city);

  let weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = "";

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      // Definesc un obiect in care grupez predictiile venite de la server pe zile
      const dayMap = {};

      // Iterez prin predictiile venite de la server {list} - in {list} avem toate predictiile
      list.forEach((element) => {
        // Extrag data predictiei pentru a putea face gruparea pe zile
        const { dt } = element;
        const day = getDayOfTheWeek(dt);

        // Facem o verificare si daca deja avem ziua saptamanii in obiect ii adaugam o noua predictie
        if (dayMap[day]) {
          dayMap[day].push(element);
        } else {
          // Altfel daca nu exista ziua respectiva atunci o adaugam in obiect impreuna cu predictia
          dayMap[day] = [element];
        }
      });

      // Parcurg obiectul dayMap - cheile din obiect sunt zilele saptamanii pt care avem predictii
      for (const key in dayMap) {
        const dayElement = document.createElement("div");
        dayElement.className = "day mb-3";

        const header = document.createElement("div");
        header.className =
          "header-day d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3 bg-secondary";

        const title = document.createElement("h3");
        title.className = "text-primary";
        title.textContent = key;

        const forecastDetailsButton = document.createElement("button");
        forecastDetailsButton.type = "button";
        forecastDetailsButton.className = "toggle btn btn-dark m-3";
        forecastDetailsButton.textContent = "Show forecast";

        header.append(title, forecastDetailsButton);

        const forecastDetails = document.createElement("div");
        forecastDetails.className = "details d-none";

        const days = dayMap[key];
        days.forEach((element) => {
          const { dt, main, weather } = element;

          const hour = getHour(dt);
          const temperatureCelsius = Math.round(main.temp);
          const realFeelCelsius = Math.round(main["feels_like"]);
          const temperatureFahrenheit = Math.round(main.temp * 1.8 + 32);
          const realFeelFahrenheit = Math.round(main["feels_like"] * 1.8 + 32);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          const box = document.createElement("div");
          box.className =
            "weather-forecast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3";
          box.innerHTML = `
              <div class="fs-5">${hour}</div>
              <div><img src="${weatherIcon}" alt="weatherIcon" /></div>
              <div class="fs-5"><p class="weather-description">${weatherDescription}</p></div>
              <p class="fs-3"><strong class="temperature">${temperatureCelsius}</strong>
              <strong class="fs-3 units">°C</strong></p>
              <p class="fs-5">Real feel: <strong class="real-feel">${realFeelCelsius}</strong>
              <strong class="fs-5 units">°C</strong></p>
              `;

          forecastDetails.appendChild(box);

          const temperatureElement = forecastDetails.querySelector(".temperature");
          const realFeelElement = forecastDetails.querySelector(".real-feel");
          const unitsElement = forecastDetails.querySelectorAll(".units");

          const switchButton = document.querySelector(".convertor");
          let isFahrenheit = false;
          switchButton.addEventListener("change", () => {
            isFahrenheit = !isFahrenheit;
            if (isFahrenheit) {
              temperatureElement.textContent = temperatureFahrenheit;
              realFeelElement.textContent = realFeelFahrenheit;
              unitsElement.forEach((unit) => {
                unit.textContent = "°F";
              });
            } else {
              temperatureElement.textContent = temperatureCelsius;
              realFeelElement.textContent = realFeelCelsius;
              unitsElement.forEach((unit) => {
                unit.textContent = "°C";
              });
            }
          });
        });

        forecastDetailsButton.addEventListener("click", () => {
          const isHidden = forecastDetails.classList.toggle("d-none");
          forecastDetailsButton.textContent = isHidden
            ? "Show forecast"
            : "Hide forecast";
        });
        dayElement.append(header, forecastDetails);
        weatherForecastContainer.append(dayElement);
      }
    });
}
