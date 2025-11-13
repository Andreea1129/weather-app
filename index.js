// Ne selectam tag-ul de HTML care contine orasul curent si impreuna cu cheia din localStorage o sa setam ce folosim:
const currentCityTag=document.querySelector('.current-city');
let currentCityFromLocalStorage=localStorage.getItem('city');
const cityImageDefault=document.querySelector(".city-image");

// Daca nu avem un oras salvat in localStorage, atunci salvam ca default Bucuresti
if(!currentCityFromLocalStorage){
    localStorage.setItem("city", "București");
    currentCityFromLocalStorage="București";
}

// Actualizam pe ecran numele orasului si imaginea sa
currentCityTag.innerHTML=currentCityFromLocalStorage;
switch(currentCityFromLocalStorage){
        case "București":
            cityImageDefault.innerHTML=`<img src="https://media.gettyimages.com/id/1147589323/photo/palace-of-the-parliament.jpg?s=612x612&w=0&k=20&c=59KgmiBq4wFSD4V3JlmnRiS7n7g19JF58kybaoXeOfQ=" alt='bucuresti'/>`;
            break;
        case "Timișoara":
            cityImageDefault.innerHTML=`<img src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6451d513d58d15000262f8d3/files/best-things-to-do-in-timisoara-main-image-hd-op.jpg" alt='timisoara'/>`;
            break;
        case "Oradea":
            cityImageDefault.innerHTML=`<img src="https://outdooractivities.ro/wp-content/uploads/2019/06/DSC08427.jpg" alt='oradea'/>`;
            break;
        case "Arad":
            cityImageDefault.innerHTML=`<img src="https://images.musement.com/cover/0098/62/thumb_9761993_cover_header.jpeg" alt='arad'/>`;
            break;
        case "Sibiu":
            cityImageDefault.innerHTML=`<img src="https://emerging-europe.com/wp-content/uploads/2019/04/dreamstime_m_16982984.jpg" alt='sibiu'/>`;
            break;
        case "Brașov":
            cityImageDefault.innerHTML=`<img src="https://destinationsmagazine.com/wp-content/uploads/2017/11/Brasov-Town-iStock-501904382-sorincolac.jpg" alt='brasov'/>`;
            break;
        case "Ploiești":
            cityImageDefault.innerHTML=`<img src="https://ploiestii.ro/uploads/evenimente/ce-pot-vizita-in-ploiesti.jpg" alt='ploiesti'/>`;
            break;
        default:
            // Aruncam o eroare daca orasul nu este valid
            throw new Error('Numele orasului nu este valid');
    }
// Afisam vremea curenta pentru orsul din localStorage
displayCurrentWeather(currentCityFromLocalStorage);

// Afisam prognoza pt urmatoarele 5 zile
displayWeatherForecast(currentCityFromLocalStorage);