var efecto = null;
var rotacion = false;
var clip = "video/demovideo1"; // nombre del vídeo, sin extensión

window.onload = function() {
	var video = document.getElementById("video");

	var btnByn = document.getElementById("byn");
	btnByn.onclick = cambiarEfecto;
	
	var btnNormal = document.getElementById("normal");
	btnNormal.onclick = cambiarEfecto;		
	
	var btnPausa = document.getElementById("btnVideo");
	btnPausa.addEventListener("click",pausarYplay,false);
	
	var btnCF = document.getElementById("btnCF");
	btnCF.onclick = cambiarEfecto;
	
	var btnAudio = document.getElementById("btnAudio");
	btnAudio.onclick = activarAudio;
	
	var btnPip = document.getElementById("btnPip");
	btnPip.onclick = loadPip;

	var btnRotar = document.getElementById("btnRotar");
	btnRotar.onclick = cambiarEstadoRotacion;
	
	video.addEventListener("play", procesarFrame, false);
	video.src = clip + getFormatExtension();
	
	video.load();
	video.play();
}

//EJERCICIO 1
function loadAudio(src) {
	return new Promise((resolve, reject) => {
		const audio = new Audio();
		audio.src = src;

		audio.addEventListener("loadeddata", () => {
			resolve(audio);
		});
		
		audio.addEventListener("error", (error) => {
			reject(error);
		});
	});
}

// EJERCICIO 2A
function pausarYplay() {
	if (video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}

// EJERCICIO 2B
function scifi(pos, r, g, b, data) {
	var offset = pos * 4;
	data[offset] = Math.round(255 - r);
	data[offset+1] = Math.round(255 - g) ;
	data[offset+2] = Math.round(255 - b) ;
}

// EJERCICIO 2C
let audioReproducido = false;
let audio = null;
function activarAudio() {
    if (!audioReproducido) {
        if (audio !== null) {
            audio.pause();
        }
        loadAudio("audio/soundtrack.mp3").then(newAudio => {
            audio = newAudio;
            audio.play();
            audioReproducido = true;
			audio.addEventListener("ended", () => {
                audioReproducido = false;
            });
		});
    }
}

// EJERCICIO 2D
function cambiarEstadoRotacion() {
	if (rotacion) {
		rotacion = false;
	} else {
		rotacion = true;
	}
}

// EJERCICIO 2E
function loadPip() {
	video.requestPictureInPicture();
}
	
function cambiarEfecto(e){
	var id = e.target.getAttribute("id");
	if ( id == "byn" ) {
		efecto = byn;
	} else if ( id == "btnCF" ) {
		efecto = scifi;
	} else {
		efecto = null;
	}
}

function getFormatExtension() {
	var video = document.getElementById("video");
	if (video.canPlayType("video/mp4") != "") {
		return ".mp4";
	} 
	else if (video.canPlayType("video/ogg") != "") {
		return ".ogv";
	}
	else if (video.canPlayType("video/webm") != "") {
		return ".webm";
	} 
}

function procesarFrame(e) {
	var video = document.getElementById("video");

	if (video.paused || video.ended) {
		return;
	}

	var bufferCanvas = document.getElementById("buffer");
	var displayCanvas = document.getElementById("display");
	var buffer = bufferCanvas.getContext("2d");
	var display = displayCanvas.getContext("2d");

	// EJERCICIO 2D <//
	if (rotacion) {
		buffer.translate(bufferCanvas.width/2,bufferCanvas.height/2);
		buffer.rotate(Math.PI/500);
		buffer.translate(-bufferCanvas.width/2, -bufferCanvas.height/2);
	}
	//>

	buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);
	var frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
	var length = frame.data.length / 4;

	for (var i = 0; i < length; i++) {
		var r = frame.data[i * 4 + 0];
		var g = frame.data[i * 4 + 1];
		var b = frame.data[i * 4 + 2];
		if (efecto){		
			efecto(i, r, g, b, frame.data);
		}
	}
	display.putImageData(frame, 0, 0);

	setTimeout(procesarFrame, 0);
	// en los navegadores modernos, es mejor usar :
	// requestAnimationFrame(procesarFrame);
}

function byn(pos, r, g, b, data) {
	var gris = (r+g+b)/3;
	data[pos * 4 + 0] = gris;
	data[pos * 4 + 1] = gris;
	data[pos * 4 + 2] = gris;
}


/*
PARTE HTML
<div id="audioDiv">
	<audio id="audio" controls>
		<source src="audio/soundtrack.mp3" type="audio/mp4" type="audio/mp4" />
		<source src="audio/soundtrack.mp3" type="audio/ogg; codecs=vorbis" />
		<p>Tu navegador no soporta la etiqueta audio HTML5. </p>		
	</audio>
</div>
*/