/* postits.js
 *
 */

window.onload = init;
var id;
function init() {
	id=0;
	var button = document.getElementById("add_button");
	button.onclick = createSticky;

	var btnRemove = document.getElementById("remove_button");
	btnRemove.onclick = clearStickyNotes;

	console.log(localStorage.length);
	console.log(localStorage);

	for (let index = 1; index <= localStorage.length; index++) {

		var textoPostit = localStorage["postit_"+index];
		console.log("EL VALOR RECUPERADO ES:"+ textoPostit);
		addStickyToDOM(textoPostit);
		id=index;
	}
	localStorage.clear();
	// cargar las notas postit de localStorage  
	// cada nota se guarda como un par así: postit_X = texto_de_la_nota
	// donde X es el número de la nota
	// por cada una de ellas, llamar al método
	// addStickyToDOM(texto_de_la_nota);
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	
        // crear la nota con nombre postit_X, donde X es un número entero
	// (postit_1, postit_2, ...)  y guardarla en el localStorage
	
	id=id+1; 	
	addStickyToDOM(value);
	localStorage.setItem("postit_"+id,value);
	console.log(localStorage.length);
	console.log(localStorage);
}


function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var postit = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "postit");
	span.innerHTML = value;
	postit.appendChild(span);
	stickies.appendChild(postit);
	
}

function clearStickyNotes() {
	// Crear un nuevo botón en la ventana de postit notes que al pulsarlo,
	// elimine las notas de pantalla y de localStorage
	// Algoritmo:	
	// obtener una referencia a la capa "stickies"
	// recorrer los hijos (childNodes) de esa referencia,
	// eliminándolos uno a uno (removeChild)
	
	var stickiesList = document.getElementById("stickies");
	
	while (stickiesList.firstChild) {
		stickiesList.removeChild(stickiesList.firstChild);
	
	
	}
	for (let i = 1; i <= localStorage.length; i++) {
		console.log("aaaaa");
		localStorage.removeItem('postit_' + i);
		console.log("DESPUES");
		console.log(localStorage);
		console.log("//////////");

	}
	// localStorage.clear();
	console.log("Eliminados");
}
