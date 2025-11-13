// Selectam butoanele din dropdown-ul cu orase
const bucharestButton = document.querySelector('.dropdown-item.bucharest');
const timisoaraButton = document.querySelector('.dropdown-item.timisoara');
const oradeaButton = document.querySelector('.dropdown-item.oradea');
const aradButton = document.querySelector('.dropdown-item.arad');
const sibiuButton = document.querySelector('.dropdown-item.sibiu');
const brasovButton = document.querySelector('.dropdown-item.brasov');
const ploiestiButton = document.querySelector('.dropdown-item.ploiesti');

const cityImage = document.querySelector(".city-image");

// Definim o functie care sa ne schimbe orasul curent afisat pe ecran
function updateCurrentCityName(city){
    // Selectam tag-ul de HTML unde o sa actualizam orasul curent
    const currentCity=document.querySelector('.current-city');
    currentCity.innerHTML= `${city}`;
}

function updateWeather(cityName){
    // Salvam in local storage optiunea aleasa
    localStorage.setItem("city", cityName);
    // Afisam vremea curenta
    displayCurrentWeather(cityName);
    // Apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(cityName);

    // Reafisam si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(cityName);
}
// Adaugam event listenere pe butoane pentru a schimba datele despre vreme si a actualiza imaginea orasului
bucharestButton.addEventListener('click', function(){
    updateWeather('București');
    cityImage.innerHTML=`<img src="https://media.gettyimages.com/id/1147589323/photo/palace-of-the-parliament.jpg?s=612x612&w=0&k=20&c=59KgmiBq4wFSD4V3JlmnRiS7n7g19JF58kybaoXeOfQ=" alt='bucuresti'/>`;
});

timisoaraButton.addEventListener('click', function(){
    updateWeather('Timișoara');
    cityImage.innerHTML=`<img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6451d513d58d15000262f8d3/files/best-things-to-do-in-timisoara-main-image-hd-op.jpg" alt='timisoara'/>`;
});

oradeaButton.addEventListener('click', function(){
   updateWeather('Oradea');
   cityImage.innerHTML=`<img src="https://outdooractivities.ro/wp-content/uploads/2019/06/DSC08427.jpg" alt='oradea'/>`;
});

aradButton.addEventListener('click', function(){
   updateWeather('Arad');
   cityImage.innerHTML=`<img src="https://images.musement.com/cover/0098/62/thumb_9761993_cover_header.jpeg" alt='arad'/>`;
});

sibiuButton.addEventListener('click', function(){
   updateWeather('Sibiu');
   cityImage.innerHTML=`<img src="https://emerging-europe.com/wp-content/uploads/2019/04/dreamstime_m_16982984.jpg" alt='sibiu'/>`;
});

brasovButton.addEventListener('click', function(){
   updateWeather('Brașov');
   cityImage.innerHTML=`<img src="https://destinationsmagazine.com/wp-content/uploads/2017/11/Brasov-Town-iStock-501904382-sorincolac.jpg" alt='brasov'/>`;
});

ploiestiButton.addEventListener('click', function(){
   updateWeather('Ploiești');
   cityImage.innerHTML=`<img src="https://ploiestii.ro/uploads/evenimente/ce-pot-vizita-in-ploiesti.jpg" alt='ploiesti'/>`;
});