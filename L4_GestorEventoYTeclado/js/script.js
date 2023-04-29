function inicializarGestores()
{
	//Gestión de Eventos (Ejercicio 1)

	var listaImagenes = new Array("fresas","limon","mandarinas","manzanas","melon","sesamo");
	var i = 0;

	function cambiarImagen() {
	  var imagen = document.getElementById("imagen")
	  imagen.style.backgroundImage = "url(imagenesBucle/"+listaImagenes[i]+".jpg)";
	  i++;
	  if (i == listaImagenes.length) {
		i = 0;
	  }
	}

	function cerebro() {
	  id = setInterval(cambiarImagen, 5000);
	}

	cerebro();
	
	imagen.onclick = function(){
	  clearInterval(id);
	}   
	////////////////////////////////////////////////////////////////////////////////////////////////


	//Gestión de Teclado (Ejercicio 2)

	document.addEventListener('keydown', (event) => {
		var keyValue = event.key;
		var codeValue = event.code;
		//console.log("keyValue: " + keyValue);
		//console.log("codeValue: " + codeValue);
		if (keyValue == "ArrowUp" || keyValue == "ArrowLeft" || keyValue == "ArrowDown" || keyValue == "ArrowRight" ){
			alert("Has pulsado la tecla: "+ codeValue);
			deshabilitarScroll();

		}
		else{
			window.onscroll=null;;
		}},false);

	function deshabilitarScroll(){
		var x=window.scrollX;
		var y=window.scrollY;
		window.onscroll=function(){window.scrollTo(x, y);};
	}
	////////////////////////////////////////////////////////////////////////////////////////////////


	var usuario = document.getElementById("usuario");
	usuario.value = 'tu@email';

	usuario.onblur = function(){
		if (usuario.value == ''){
			usuario.value = "tu@email";
		}
	}

	usuario.onfocus = function(){
		if (usuario.value == 'tu@email'){
			usuario.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change",gestorCombo);

	function gestorCombo(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var formulario = document.getElementById('formulario');
	formulario.onsubmit = function(){
		console.log("click en submit");
		return false;
	}

}

window.onload = inicializarGestores;
