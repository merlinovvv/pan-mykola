"use strict"

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuContacts = document.querySelectorAll('.menu__contacts');
    if (menuContacts.length > 0) {
        for (let index = 0; index < menuContacts.length; index++) {
            const menuContact = menuContacts[index];
            menuContact.addEventListener("click", function (e) {
                menuContact.classList.toggle('_burger');
            });

        }
    }
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        if(document.body.classList[1] === '_lock'){
            document.body.children[1].classList.add('_blacked');
        } else{
            document.body.children[1].classList.remove('_blacked');
        }
        iconMenu.classList.toggle('_burger');
        menuBody.classList.toggle('_burger');
        if (iconMenu.classList.value === 'menu__icon _burger')
            setTimeout(() => {
                document.querySelector('.navigation__logo img').src = '../img/logo-burger.png';
            }, 200);
        else {
            setTimeout(() => {
                document.querySelector('.navigation__logo img').src = '../img/logo-header.png';
            }, 100);
        }
    });
}

