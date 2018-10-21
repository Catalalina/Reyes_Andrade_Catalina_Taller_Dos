var setBackgroundImage = setInterval(changeImage, 3000);
var imageSource = ["url(./Imagenes/fondo.jpg)", "url(./Imagenes/fondoDos.jpg)", "url(./Imagenes/fondoTres.jpg)", "url(./Imagenes/fondoCuatro.jpg)"];
var index = 0;

function changeImage() {
    if (index === imageSource.length) {
        index = 0;
    }
    document.getElementById("header").style.backgroundImage = imageSource[index];
    index++;
}



var setImage = setInterval(changeImg, 3000);
var imageS = ["./Imagenes/momentoUno.jpg", "./Imagenes/momentoDos.jpg", "./Imagenes/momentoTres.jpg", "./Imagenes/momentoCuatro.jpg", "./Imagenes/momentoCinco.jpg", "./Imagenes/momentoSeis.jpg", "./Imagenes/momentoSiete.jpg", "./Imagenes/momentoocho.jpg"];
var indexx = 0;
var indexxx = 8;

function changeImg() {
    if (indexx === imageS.length) {
        indexx = 0;
    }
    if (indexxx === 0) {
        indexxx = imageS.length;
    }
    document.getElementById("moments__one").src = imageS[indexx];
    document.getElementById("moments__two").src = imageS[indexxx];
    indexx++;
    indexxx--;
}

var image = document.getElementById("choose__product");
var product = true;

document.querySelector("#choose__product").addEventListener("click", function(){
    if (product) {
        image.src = "./Imagenes/productoRender.jpg";
    } else {
        image.src = "./Imagenes/producto.jpg";
     
    }
    product=!product;
    console.log(image.src);
});



