$(document).ready(function() {
    $('[type="tel"]').mask('+38(000)-00-00-000');
    $('#password').hideShowPassword({
        innerToggle: true,
    });
})

 
const btnHistoryBack = document.querySelector('#history-back');
const backHistory =()=>  window.history.back();
btnHistoryBack.addEventListener('click', backHistory)