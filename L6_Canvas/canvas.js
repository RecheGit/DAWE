var x=0;
var y=0;
var lienzo;
var context;
var size = 50;
zoom = 2;

window.onload = function(){
    lienzo = document.getElementById("lienzo"); 
    context = lienzo.getContext("2d");
    img = new Image();
    img.src = "imagen/spritesheet.png"
    img.onload = function() {
        pintarCuadroRojo();
    }
};

function pintarCuadroRojo() {
    context.drawImage(img,0,0);
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(x,y);
    context.lineTo(x+size,y);
    context.lineTo(x+size,y+size);
    context.lineTo(x,y+size);
    context.lineTo(x,y);
    context.closePath(); 
    context.lineWidth = 2; 
    context.stroke();
    
    context.drawImage(img, x,y, size, size, 490, 10, size*zoom, size*zoom);
}

function borrar (pCanvas, pContext) {
    pContext.clearRect(0,0, pCanvas.width, pCanvas.height);
}

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case "ArrowLeft":
            x -= 1;
            pintarCuadroRojo(x,y);
            if (x < 0) {
                x = 0;
            }
            break;
        case "ArrowRight":
            x += 1;
            pintarCuadroRojo(x,y);
            if (x > lienzo.width-100-size) {
                x = lienzo.width-100-size;
            }            
            break;
        case "ArrowUp":
            y -= 1;
            pintarCuadroRojo(x,y);
            if (y < 0) {
                y = 0;
            }           
            break;
        case "ArrowDown":
            y += 1;
            pintarCuadroRojo(x,y);
            if (y > lienzo.height-size) {
                y = lienzo.height-size;
            }
            break;
    }
    borrar(lienzo,context);
    img.onload();
});