canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 100;
roverLength = 90;

roverX = 10;
roverY= 10;

backgroundImage = "mars.jpg";
roverImage = "rover.png";

function add(){
backgroundImageTag = new Image();
backgroundImageTag.onload = uploadBackground;
backgroundImageTag.scr = backgroundImage;

roverImageTag = new Image();
roverImageTag = uploadBackground;
roverImageTag = backgroundImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0 ,0 ,canvas.width, canvas.heigth);
}

function uploadRover(){
    ctx.drawImage(roverImageTag, roverX  ,roverY, canvas.width, canvas.heigth);
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up()
        console.log("CIMA");
    }

    if(keyPressed == '40'){
        up()
        console.log("BAIXO);
    }

    if(keyPressed == '37'){
        up()
        console.log("ESQUERDA");
    }

    if(keyPressed == '39'){
        up()
        console.log("DIREITA");
    }
}
