// Ne definim 2 functii utilitare care o sa ne extraga dintr-o data in format UTC: ziua si ora
function getDayOfTheWeek (dateInUtcFormat){
    // Pentru a putea crea o data pornind de la o valoare in UTC  este nevoie sa o inmultim cu 1000
    const date = new Date(dateInUtcFormat * 1000);
    // Extragem ziua saptamanii sub forma de index
    const dayIndex=date.getDay();
    // console.log(dayIndex);
    let day;

    // Pentru a mapa index-ul zilei cu zilele in romana o sa folosim un switch
    switch(dayIndex){
        case 0:
            day = "Duminică";
            break;
        case 1:
            day = "Luni";
            break;
        case 2:
            day = "Marți";
            break;
        case 3:
            day="Miercuri";
            break;
        case 4:
            day="Joi";
            break;
        case 5:
            day="Vineri";
            break;
        case 6:
            day="Sâmbătă";
            break;
        default:
            // Aruncam o eroare daca index-ul nu este valid
            throw new Error('Indexul trebuie sa fie intre 0 si 6');
    }
    // console.log(day);
    return day;
}

function getHour(dateInUtcFormat){
    const date = new Date (dateInUtcFormat*1000);
    // extragem ora
    let hour = date.getHours();
    // Daca ora are o valoare mai mica decat 10 - ii adaugam un 0
    if(hour<10){
        hour = `0${hour}`;
    }
    // console.log(hour);

    // extragem minutele, daca valoarea e mai mica de 10 ii adaugam un 0
    let minutes = date.getMinutes();
    if(minutes<10){
        minutes=`0${minutes}`;
    }

    // console.log(minutes);

    // Returnam ora sub formatul dorit
    return `${hour}:${minutes}`;
}