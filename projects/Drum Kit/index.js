function handelclick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
}

for (const element of document.querySelectorAll(".drum")) {
  element.addEventListener("click", handelclick);
}

document.addEventListener('keydown',function(event){
makeSound(event.key)
});

function makeSound(key){

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
    case "l":
     
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}