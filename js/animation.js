/* Avec l'id dans le html */
var div = document.getElementById('myLink');

//alert(div);

/* Avec les balises */
var divs = document.getElementsByTagName('div');

/*for (var i = 0, c = divs.length; i < c ; i++)
{
	alert('Element n° '+ (i+1) +' : '+ divs[i]);
}*/

/* Avec le nom donné */
var java = document.getElementsByName('java');

/*for (var i = 0, c = java.length; i < c ; i++)
{
	alert('Element n° '+ (i+1) +' : '+ java[i]);
}*/

/******************/
//var query = document.querySelector('#menu .item span'), queryAll = document.querySelectorAll('#menu .item span');

//alert(query.innerHTML); // Affiche : "Élément 1"

//alert(queryAll.length); // Affiche : "2"
//alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"

/********MODIFIER ATTRIBUE DANS BALISE**********/
var link = document.getElementById('myLink'),
	href = link.href;

//alert(href);
link.href = 'https://www.google.fr/';

/**********AJOUTER UNE CLASS***********/
//document.getElementById('myNav').className = 'blue';

var nav 	= document.querySelector('nav'),
	result 	= '';

alert(nav.classList);

nav.classList.add('blue');

for (var i = 0; i < nav.classList.length; i++) {
	result += '.' + nav.classList[i] + '\n';
}

alert(result);
