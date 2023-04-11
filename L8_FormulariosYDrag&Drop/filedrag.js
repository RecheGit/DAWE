function $id(id) {
    return document.getElementById(id);
}

function output(msg) {
    var m = $id("messages")
    m.innerHTML = msg + m.innerHTML;
}

function fileDragHover(e) {
    // Evita que el evento se propague a capas que contienen la capa actual de forma sucesiva
    e.stopPropagation();
    // Deshabilitar el comportamiento por defecto
    e.preventDefault();
    // Modifica la clase de elemento objetivo del evento, si arrastramos ficheros por encima le aplicamos la clase hover a ese elemento
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

function fileSelectHandler(e) {
    // Cancelar evento y cambiar estilo destino
    fileDragHover(e);
    // Obtener ficheros (FileList) del imput (izquierda) o del drag&drop (derecha)
    var files = e.target.files || e.dataTransfer.files;
    // Procesar todos os objetos File
    for (var i = 0, f; f = files[i]; i++) {
        parseFile(f);
    }

    var formFiles = $id("upload").fileselect;
    if (formFiles.files.length == 0) {
        formFiles.files = files;
    }
}

function parseFile(file) {
    console.log(file.name);
    output(
        "<p>Datos del fichero: <br>Nombre: <strong>" + file.name + 
        "<br></strong>Tipo: <strong>" + file.type + 
        "<br></strong>Tamaño: <strong>" + file.size +
        " </strong>Bytes<p>"
    );
}

// FUNCTION ENVIAR -- falta de hacer --

function enviar(submitform){
    // debes devolver una función que recoja los datos de submitform usando FormData y haga una
    // petición post (usando el Fetch API) con dichos datos a /pedido/add 
    //  El resultado debes tratarlo como un objeto JSON y mostrarlo pantalla. En concreto la respuesta
    // JSON debe contener las rutas a los ficheros subidos al servidor (al hacer click sobre ellas deben
    // abrirse los ficheros) y los valores del resto de campos
}


function init() {
    var fileselect = $id("fileselect"), 
        filedrag = $id("filedrag"), 
        submitbutton = $id("enviar"); 
    
    submitbutton.onclick = enviar($id("upload"));

    fileselect.addEventListener("change", fileSelectHandler, false);
    
    filedrag.addEventListener("dragover", fileDragHover, false);
    filedrag.addEventListener("dragleave", fileDragHover, false);
    /*filedrag.addEventListener("dragenter", dragOver, false);
    filedrag.addEventListener("dragexit", dragOver, false);*/
    filedrag.addEventListener("drop", fileSelectHandler, false);
    filedrag.style.display = "block";
}

if (window.File && window.FileList) {
    init();
}
