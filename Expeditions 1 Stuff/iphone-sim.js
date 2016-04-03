// JavaScript File

var iphoneButtonBackground = document.getElementById("iphone-button-background");
var iphoneButtonColors = document.getElementById("iphone-button-phone-color");
var textArea = document.getElementById("textArea");
var homeButton = document.getElementById("homeButton");
var phoneBackground = document.getElementById("phoneBackground");
var storeBackground = document.getElementById("storeBackground");
var safariBackground = document.getElementById("safariBackground");
var musicBackground = document.getElementById("musicBackground");
var appBackgrounds = document.getElementsByClassName("app-backgrounds");

/*CHANGE BACKGROUND*/
/*________________________________________________________________*/
function changeBackground(){
    var image = document.getElementById("default-background");
    if(image.getAttribute("src")=="iphone background.png"){
        image.src="iphone background1.png";
    }else{
        image.src="iphone background.png";
    }
}

iphoneButtonBackground.addEventListener("click", function(){
    changeBackground();
});


/*CHANGE COLORS*/
/*________________________________________________________________*/
function changeColor(){
    var image = document.getElementById("iphone-template");
    if(image.getAttribute("src")=="iphone 6 transparent black.png"){
        image.src="iphone 6 transparent white.png";
        homeButton.style.backgroundColor = "white";
    } else {
        image.src="iphone 6 transparent black.png";
        homeButton.style.backgroundColor = "black";
    }
}
iphoneButtonColors.addEventListener("click", function(){
    changeColor();
});


/*SHOW NOTES*/
/*________________________________________________________________*/
function showNotes(){
    textArea.style.display = "initial";   
}

function showPhone(){
    phoneBackground.style.display = "initial";   
}

function showStore(){
    storeBackground.style.display = "initial";   
}

function showSafari(){
    safariBackground.style.display = "initial";   
}

function showMusic(){
    musicBackground.style.display = "initial";   
}

/*GO HOME*/
/*________________________________________________________________*/
function goHome(){
   textArea.style.display="none";
   phoneBackground.style.display="none";
   storeBackground.style.display="none";
   safariBackground.style.display="none";
   musicBackground.style.display="none";
}
