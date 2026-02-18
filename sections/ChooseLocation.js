const aradButton = document.querySelector('.dropdown-item.arad');
const brasovButton = document.querySelector('.dropdown-item.brasov');
const bucharestButton = document.querySelector('.dropdown-item.bucharest');
const clujButton = document.querySelector('.dropdown-item.cluj');
const constantaButton = document.querySelector('.dropdown-item.constanta');
const iasiButton = document.querySelector('.dropdown-item.iasi');
const oradeaButton = document.querySelector('.dropdown-item.oradea');
const sibiuButton = document.querySelector('.dropdown-item.sibiu');
const timisoaraButton = document.querySelector('.dropdown-item.timisoara');

const cityImage = document.querySelector(".city-image");

// Definesc o functie care sa ne schimbe orasul curent afisat pe ecran
function updateCurrentCityName(city){
    const currentCity=document.querySelector('.current-city');
    currentCity.innerHTML= `${city}`;
}

function updateWeather(cityName){
    // Salvez in local storage optiunea aleasa
    localStorage.setItem("city", cityName);
    // Afisez vremea curenta
    displayCurrentWeather(cityName);
    // Apelez functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(cityName);

    // Reafisez si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(cityName);
}
// Adaug event listenere pe butoane pentru a schimba datele despre vreme si a actualiza imaginea orasului
aradButton.addEventListener('click', function(){
   updateWeather('Arad');
   cityImage.innerHTML=`<img src="https://images.musement.com/cover/0098/62/thumb_9761993_cover_header.jpeg" alt='arad'/>`;
});

brasovButton.addEventListener('click', function(){
   updateWeather('Brașov');
   cityImage.innerHTML=`<img src="https://destinationsmagazine.com/wp-content/uploads/2017/11/Brasov-Town-iStock-501904382-sorincolac.jpg" alt='brasov'/>`;
});

bucharestButton.addEventListener('click', function(){
    updateWeather('București');
    cityImage.innerHTML=`<img src="https://media.gettyimages.com/id/1147589323/photo/palace-of-the-parliament.jpg?s=612x612&w=0&k=20&c=59KgmiBq4wFSD4V3JlmnRiS7n7g19JF58kybaoXeOfQ=" alt='bucuresti'/>`;
});

clujButton.addEventListener('click', function(){
   updateWeather('Cluj-Napoca');
   cityImage.innerHTML=`<img src="https://www.romanianfriend.com/uploads/media/cluj_napoca_1.jpeg" alt='cluj'/>`;
});

constantaButton.addEventListener('click', function(){
   updateWeather('Constanța');
   cityImage.innerHTML=`<img src="https://re-value-cities.eu/sites/default/files/media/images/localities/constanta-radub85-dreamstime-122343852jpg.jpg" alt='constanta'/>`;
});

iasiButton.addEventListener('click', function(){
   updateWeather('Iași');
   cityImage.innerHTML=`<img src="https://www.danagont.ro/wp-content/uploads/2022/08/palatul-culturii-iasi-birds-eye-view.jpg" alt='iasi'/>`;
});

oradeaButton.addEventListener('click', function(){
   updateWeather('Oradea');
   cityImage.innerHTML=`<img src="https://outdooractivities.ro/wp-content/uploads/2019/06/DSC08427.jpg" alt='oradea'/>`;
});

sibiuButton.addEventListener('click', function(){
   updateWeather('Sibiu');
   cityImage.innerHTML=`<img src="https://emerging-europe.com/wp-content/uploads/2019/04/dreamstime_m_16982984.jpg" alt='sibiu'/>`;
});

timisoaraButton.addEventListener('click', function(){
    updateWeather('Timișoara');
    cityImage.innerHTML=`<img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6451d513d58d15000262f8d3/files/best-things-to-do-in-timisoara-main-image-hd-op.jpg" alt='timisoara'/>`;
});
