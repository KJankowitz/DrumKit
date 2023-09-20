//Mouse click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonNum = this.innerHTML;
        checkSound(buttonNum);
        buttonPress(buttonNum);
    } );
}

// Keyboard buttons 
document.addEventListener("keydown", function(event) {
    checkSound(event.key);
    buttonPress(event.key);
})

//Play the sound
function checkSound (key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "d":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play()
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
      
        default: console.log(buttonNum);
            break;
      }
}

//Animate button pressed
function buttonPress(currentKey) {
    var buttonPressed = document.querySelector("." + currentKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function() {
        buttonPressed.classList.remove("pressed");
    }, 100);
}
