// Aici voi adauga functionalitatea de scroll to top. Butonul va fi initial ascuns, iar cand user-ul scrolleaza mai mult din jumatatea viewport-ului, butonul va fi afisat

const scrollToTopButton=document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behaviour:"smooth"
    });
})

const height = window.innerHeight;
document.addEventListener('scroll', function(){
    if(window.scrollY > height / 2){
        scrollToTopButton.style.visibility = "visible";
    }
    else{
        scrollToTopButton.style.visibility = "hidden";
    }
})