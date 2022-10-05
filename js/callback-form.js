// const callbackForm = document.querySelector('.send__form');
// const closeBtn = document.querySelector('#modal-close-btn');
// const userName = document.querySelector('#callback-form-input-name');
// const userEmail = document.querySelector('#callback-form-input-email');
// const userPhone = document.querySelector('#callback-form-input-phone');
// const requestReceivedModal = document.querySelector('.modal-request-received');


// closeBtn.addEventListener('click', function() {
//     requestReceivedModal.classList.remove('modal-active');
// })



// const newLocal = '.send-input-error';
// callbackForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     let hasError = false;

    
//     if (!userName.value.trim()) {
//         userName.classList.add('send-input-error');
//         hasError = true;
//     } else {
//         userName.classList.remove('send-input-error');
//     }

//     if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
//         userPhone.classList.add('send-input-error');
//         hasError = true;
//     } else {
//         userPhone.classList.remove('send-input-error');
//     }

//     if (!userEmail.value.trim() || !isEmailValid(userEmail.value))  {
//         userEmail.classList.add('send-input-error');
//         hasError = true;
//     } else {
//         userEmail.classList.remove('send-input-error');
//     }

//     if (hasError) {
//         return;
//     }

//     userName.value = '';
//     userEmail.value = '';
//     userPhone.value = '';


//     requestReceivedModal.classList.add('modal-active');
//     setTimeout(function() {
//         requestReceivedModal.classList.remove('modal-active');
//     }, 2000);
// });

// function isEmailValid(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email.toLowerCase());
// }

// function isPhoneValid(phone = '') {
//     const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

//     return phone.match(regexp);
// }

$(function () {
    //E-mail Ajax Send
    $(".send__form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#modals-wrapper').addClass('modal-active');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});