/* postits.js
 *
 */

window.onload = init;
var id;
function init() {
	id = 0;
	var button = document.getElementById("add_button");
	button.onclick = createSticky;

	// cargar las notas postit de localStorage  
	// cada nota se guarda como un par así: postit_X = texto_de_la_nota
	// donde X es el número de la nota
	// por cada una de ellas, llamar al método
	// addStickyToDOM(texto_de_la_nota);
	// var stickiesList = document.getElementById("stickies");
	// stickiesList.removeChild(stickiesList.firstChild);
	var btnRemove = document.getElementById("remove_button");
	btnRemove.onclick = clearStickyNotes;
	
	count();
	console.log(localStorage);
	
	for (let i = 1; i <= localStorage.length; i++) {
		var txtPostit = localStorage['postit_' + i];
		addStickyToDOM(txtPostit);
		id = i;	
	}
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	
    // crear la nota con nombre postit_X, donde X es un número entero
	// (postit_1, postit_2, ...)  y guardarla en el localStorage
	
	id = id + 1;
	localStorage.setItem('postit_' + id, value);
	addStickyToDOM(value);
	count();
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
	for (let i = localStorage.length; i >= 0; i--) {
		console.log("length: " + localStorage.length);
		localStorage.removeItem('postit_' + i);
		console.log("i: " + i);
		console.log(localStorage);
	}
	while (stickiesList.firstChild) {
		stickiesList.removeChild(stickiesList.firstChild);
	}
	id = 0;
	count();
	console.log("Eliminados");
}

function count() {
	let totalLetters = 0;

	for (let i = 1; i <= localStorage.length; i++) {
		var noteText = localStorage.getItem('postit_' + i);
		if (noteText != null) {
			totalLetters = totalLetters + noteText.length;		
		}
	}
	usedKB = totalLetters * 0.002;
	spanKB = document.getElementById("used_space");
	spanKB.innerHTML = totalLetters + " - " + usedKB;
}
