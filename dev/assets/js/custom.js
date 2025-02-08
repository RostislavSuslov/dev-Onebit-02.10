$(document).ready(function() {
    $('[type="tel"]').mask('+38(000)-00-00-000');
    $('#password').hideShowPassword({
        innerToggle: true,
    });
})

// const btnHistoryBack = document.querySelector('#history-back');
// const backHistory =()=>  window.history.back();
// btnHistoryBack.addEventListener('click', backHistory)

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > header.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});


const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});