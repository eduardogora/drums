function makeSound(event){
    key = (String.fromCharCode(event.keyCode));
    switch(key){
        case 'W':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'A':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 'S':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case 'D':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break; 
        case 'J':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case 'K':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'L':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
    }
    
}

function onKeyDownHandler(event) {

    var codigo = event.which || event.keyCode;
    console.log("Codigo", event.keyCode)

    console.log("Presionada: " + codigo);
     
    if(codigo === 13){
      console.log("Tecla ENTER");
    }

    if(codigo >= 65 && codigo <= 90){
      console.log(String.fromCharCode(codigo));
    }

     
}

var drums = document.querySelectorAll(".drum");
var numOfDrums = drums.length;

/*for(var i = 0; i<numOfDrums; i++){
    
    drums[i].addEventListener("click", function(){
        var keyPressed = drums[i].innerHTML;
        drums[i].makeSound(keyPressed)
    });
}*/