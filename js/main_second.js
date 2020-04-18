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

//https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Building_blocks/conditionals