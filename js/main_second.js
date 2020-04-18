/**
 *
 * 		CALENDRIER
 *
 */

const selectInput = document.querySelector('.month');
const listDay = document.querySelector('.selected ul');
const displayMonth = document.querySelector('.selected p');

selectInput.onchange = function () {

    let choice = selectInput.value;
    let nbrDays;

    if (choice === 'Janvier' || choice === 'Mars' || choice === 'Mai' || choice === 'Juillet' || choice === 'Août' || choice === 'Octobre' || choice === 'Décembre'){
        nbrDays = 31;
    } else if (choice === 'Avril' || choice === 'Juin' || choice === 'Septembre' || choice === 'Novembre'){
        nbrDays = 30;
    } else if (choice === 'Février'){
        nbrDays = 29;
    }else {
        nbrDays = 0;
    }

    createCalendar(nbrDays, choice);

}

function createCalendar(days, choice) {

    listDay.innerHTML = '';
    if (choice !== 'default'){
        displayMonth.textContent = choice;
    } else {
        displayMonth.innerHTML = '';
    }

    for (let i = 1; i <= days; i++){
        const daysList = document.createElement('li');
        daysList.textContent = i;
        listDay.appendChild(daysList);
    }
}

/**
 *
 * 		CHANGER DE COULEUR
 *
 */

const colorJS = document.querySelector('.js-class button');
const colorHTML = document.querySelector('.html-class button');
const colorCSS = document.querySelector('.css-class button');
const colorSASS = document.querySelector('.sass-class button');
const tempalteArray = [
                            'js-template',
                            'html-template',
                            'css-template',
                            'sass-template'
                        ]

const navColor = document.getElementById('navbar-js');
const btnNavColor = document.getElementById('btn-navbar-js')

colorJS.addEventListener('click', jsTemplate);
colorHTML.addEventListener('click', htmlTemplate);
colorCSS.addEventListener('click', cssTemplate);
colorSASS.addEventListener('click', sassTemplate);

function jsTemplate() {
    for (let i = 0; i < tempalteArray.length; i++)
        navColor.classList.remove(tempalteArray[i]);

    for (let i = 0; i < tempalteArray.length; i++)
        btnNavColor.classList.remove(tempalteArray[i]);

    navColor.classList.add('js-template');
    btnNavColor.classList.add('js-template');
}

function htmlTemplate() {
    for (let i = 0; i < tempalteArray.length; i++)
        navColor.classList.remove(tempalteArray[i]);

    for (let i = 0; i < tempalteArray.length; i++)
        btnNavColor.classList.remove(tempalteArray[i]);

    navColor.classList.add('html-template');
    btnNavColor.classList.add('html-template');
}

function cssTemplate() {

    for (let i = 0; i < tempalteArray.length; i++)
        navColor.classList.remove(tempalteArray[i]);

    for (let i = 0; i < tempalteArray.length; i++)
        btnNavColor.classList.remove(tempalteArray[i]);

    navColor.classList.add('css-template');
    btnNavColor.classList.add('css-template');

}

function sassTemplate() {
    for (let i = 0; i < tempalteArray.length; i++)
        navColor.classList.remove(tempalteArray[i]);

    for (let i = 0; i < tempalteArray.length; i++)
        btnNavColor.classList.remove(tempalteArray[i]);

    navColor.classList.add('sass-template');
    btnNavColor.classList.add('sass-template');
}