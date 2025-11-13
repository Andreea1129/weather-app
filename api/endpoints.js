const API_KEY = "ff317c4d5a74713a7c20e19c872d09e1";
// API key-urile NU ar trebui stocate in repo si in format text deoarece nu este secure. API key-urile de preferat ar trebui sa fie stocate pe un server, insa fiindca API-ul de la Open Weather este gratuit momentan e ok sa il tinem aici.

// Definim endpoint-urile catre server:
// Pentru endpoint de vreme curenta trebuie sa inseram dinamic parametrul city - ne definim in functie un parametru
function getCurrentWeatherEndpoint(city) {
	// API-ul de la Open Weather are nevoie de urmatorii query params:
	// city
	// lang - noi o sa trimitem ro
	// units - metric, pentru a primi rezultatele in grade Celsius
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}
