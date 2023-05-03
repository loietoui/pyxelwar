/*Declaration des variables*/
var canvas = document.getElementById("Grille");
var ctx = canvas.getContext("2d");
var couleurStylo = '#0ce6f2';
var width = 1000;
var height = 500;

canvas.width = width;
canvas.height = height;

/*dessine les lignes horizontales de la grille*/
for(let x=0; x<=width; x+=10){
    ctx.moveTo(x, 0);
    ctx.lineTo(x,height);
}

/*dessine les lignes verticales de la grille*/
for(let y=0; y<=height; y+=10){
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
}
/*affiche les lignes tracées*/
ctx.strokeStyle='#bbb';
ctx.stroke();


/*fonction permetant de changer la couleur du stylo*/
function mettreCouleurStylo(couleur) {
    couleurStylo = couleur;
}

/*Cela permet de placer les pixels sur la grille*/
canvas.addEventListener('click',function(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.rect(Math.floor(x/10)*10, Math.floor(y/10)*10, 10, 10);
    ctx.fillStyle = couleurStylo;
    ctx.fill();
    ctx.closePath();
})
