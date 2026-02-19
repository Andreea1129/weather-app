const currentCityTag = document.querySelector(".current-city");
let currentCityFromLocalStorage = localStorage.getItem("city");
const cityImageDefault = document.querySelector(".city-image");

// Daca nu avem un oras salvat in localStorage, atunci salvam ca default Bucuresti
if (!currentCityFromLocalStorage) {
  localStorage.setItem("city", "București");
  currentCityFromLocalStorage = "București";
}

// Actualizam pe ecran numele orasului si imaginea sa
currentCityTag.innerHTML = currentCityFromLocalStorage;
switch (currentCityFromLocalStorage) {
  case "Arad":
    setCityImage(
      "https://images.musement.com/cover/0098/62/thumb_9761993_cover_header.jpeg",
      "arad",
      cityImageDefault,
    );
    break;
  case "Brașov":
    setCityImage(
      "https://destinationsmagazine.com/wp-content/uploads/2017/11/Brasov-Town-iStock-501904382-sorincolac.jpg",
      "brasov",
      cityImageDefault,
    );
    break;
  case "București":
    setCityImage(
      "https://media.gettyimages.com/id/1147589323/photo/palace-of-the-parliament.jpg?s=612x612&w=0&k=20&c=59KgmiBq4wFSD4V3JlmnRiS7n7g19JF58kybaoXeOfQ=",
      "bucuresti",
      cityImageDefault,
    );
    break;
  case "Cluj-Napoca":
    setCityImage(
      "https://www.romanianfriend.com/uploads/media/cluj_napoca_1.jpeg",
      "cluj",
      cityImageDefault,
    );
    break;
  case "Constanța":
    setCityImage(
      "https://re-value-cities.eu/sites/default/files/media/images/localities/constanta-radub85-dreamstime-122343852jpg.jpg",
      "constanta",
      cityImageDefault,
    );
    break;
  case "Iași":
    setCityImage(
      "https://www.danagont.ro/wp-content/uploads/2022/08/palatul-culturii-iasi-birds-eye-view.jpg",
      "iasi",
      cityImageDefault,
    );
    break;
  case "Oradea":
    setCityImage(
      "https://outdooractivities.ro/wp-content/uploads/2019/06/DSC08427.jpg",
      "oradea",
      cityImageDefault,
    );
    break;
  case "Sibiu":
    setCityImage(
      "https://emerging-europe.com/wp-content/uploads/2019/04/dreamstime_m_16982984.jpg",
      "sibiu",
      cityImageDefault,
    );
    break;
  case "Timișoara":
    setCityImage(
      "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6451d513d58d15000262f8d3/files/best-things-to-do-in-timisoara-main-image-hd-op.jpg",
      "timisoara",
      cityImageDefault,
    );
    break;
  default:
    throw new Error("Numele orasului nu este valid");
}

displayCurrentWeather(currentCityFromLocalStorage);
displayWeatherForecast(currentCityFromLocalStorage);
