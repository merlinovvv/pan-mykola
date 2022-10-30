"use strict"
var t;
function up() {
    if(window.outerWidth > 769)
    if ((window.innerHeight + window.pageYOffset) < document.documentElement.scrollHeight - 1) 
    { 
        window.scrollBy(0, 100); 
        t = setTimeout('up()', 20); 
    } else clearTimeout(t);
    return false;
}

var im = new Inputmask("+38 (999) 999-99-99");

var mainForm = document.querySelector('.form__profile');
if (mainForm !== null) {
    var telMain = mainForm.querySelector('input[type="tel"]');
    im.mask(telMain);
}

var slideForm = document.querySelector('.questions__form');
if (slideForm !== null) {
    var telSlide = slideForm.querySelector('input[type="tel"]');
    im.mask(telSlide);
}

let myElement = document.querySelector('.questions__form');
let btnSend = document.querySelector('.btn-send');
var yes = document.querySelector('.sending');
let arr = new Array();
let j = 0;
function next() {
    if (myElement.children[j + 1] !== undefined) {
        myElement.children[j].classList.remove('on');
        myElement.children[j + 1].classList.add('on');
        j++;
    }
}
function back() {
    if (myElement.children[j - 1] !== undefined) {
        myElement.children[j].classList.remove('on');
        myElement.children[j - 1].classList.add('on');
        j--;
    }
}
if (slideForm !== null) {
    new window.JustValidate('.questions__form', {
        rules: {
            tel: {
                required: true,
                function: () => {
                    const phone = telSlide.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                }
            }
        },
        messages: {
            name: {
                required: 'Введіть ім`я',
                minLength: 'Введіть мінімум 3 символи',
                maxLength: 'Максимальна кількість символів - 15'
            },
            tel: {
                required: 'Введіть телефон',
                function: 'Введіть коректний телефон'
            },
            radio: {
                required: 'Виберіть один із запропонованих пунктів'
            }
        },
        colorWrong: 'red',
        submitHandler: function (thisForm) {
            let formData = new FormData(thisForm);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        setTimeout(
                            () => {
                                myElement.children[j].classList.remove('on');
                                myElement.children[j + 1].classList.add('on');
                                j++;
                            },
                            2 * 10
                        );
                    }
                }
            }
            xhr.open('POST', '../mail.php', true);
            xhr.send(formData);

            thisForm = reset();
        }
    });
}

if (mainForm !== null) {
    new window.JustValidate('.form__profile', {
        rules: {
            tel: {
                required: true,
                function: () => {
                    const phone = telMain.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                }
            }
        },
        messages: {
            name: {
                required: 'Введіть ім`я',
                minLength: 'Введіть мінімум 3 символи',
                maxLength: 'Максимальна кількість символів - 15'
            },
            tel: {
                required: 'Введіть телефон',
                function: 'Введіть коректний телефон'
            }
        },
        colorWrong: 'red',
        submitHandler: function (thisForm) {
            let formData = new FormData(thisForm);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        yes.classList.add('ok');
                        setTimeout(
                            () => {
                                yes.classList.remove('ok');
                            },
                            2 * 1000
                        );
                    }
                }
            }
            xhr.open('POST', '../mail.php', true);
            xhr.send(formData);

            thisForm = reset();
        }
    });
}
