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
        const dayElement=document.createElement("div");
        dayElement.className="day mb-3";

        const header=document.createElement("div");
        header.className="header-day d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3 bg-secondary";
        
        const title=document.createElement("h3");
        title.className="text-primary";
        title.textContent=key;

        const forecastDetailsButton=document.createElement("button");
        forecastDetailsButton.type="button";
        forecastDetailsButton.className="toggle btn btn-dark m-3";
        forecastDetailsButton.textContent="Show forecast";

        header.append(title,forecastDetailsButton);

        const forecastDetails=document.createElement("div");
        forecastDetails.className="details d-none";

        const days = dayMap[key];
        days.forEach((element) => {
          const { dt, main, weather } = element;

          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main["feels_like"]);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          const box=document.createElement("div");
          box.className="weather-forecast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3";
          box.innerHTML = `
              <div class="fs-5">${hour}</div>
              <div><img src="${weatherIcon}" alt="weatherIcon" /></div>
              <div class="fs-5"><p>${weatherDescription}</p></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div class="real-feel fs-5">Real feel: <strong>${realFeel}°C</strong></div>
              `; 

          forecastDetails.appendChild(box);   
          });

          forecastDetailsButton.addEventListener("click", ()=>{
          const isHidden=forecastDetails.classList.toggle("d-none");
          forecastDetailsButton.textContent=isHidden ? "Show forecast" : "Hide forecast";
        });

        dayElement.append(header,forecastDetails);
        weatherForecastContainer.append(dayElement);
        
      }
    });
  }


