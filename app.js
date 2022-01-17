document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navigation a');
    enlaces.forEach(enlaces =>{
        enlaces.addEventListener('click', function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: 'smooth'});
        })
    })
}





