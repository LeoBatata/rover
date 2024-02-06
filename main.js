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
roverImageTag.onload = uploadRover ;
roverImageTag.scr = roverImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0 ,0 ,canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImageTag, roverX  ,roverY, roverLength, roverHeight);
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
        down()
        console.log("BAIXO");
    }

    if(keyPressed == '37'){
        left()
        console.log("ESQUERDA");
    }

    if(keyPressed == '39'){
        right()
        console.log("DIREITA");
    }
}

function up(){

    roverY = -10;
    uploadBackground();
    uploadRover();
}

function down(){

    roverY = 10;
    uploadBackground();
    uploadRover();
}

function right(){

    roverX = 10;
    uploadBackground();
    uploadRover();
}

function left(){

    roverX = -10;
    uploadBackground();
    uploadRover();
}


