var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
var bird = document.getElementById("bird");
let id = setInterval(frame, 10);
let pos = 0;
var pipe1height = parseInt(window.getComputedStyle(pipe1).getPropertyValue("height"));
var pipe2height = parseInt(window.getComputedStyle(pipe2).getPropertyValue("height"));
  function frame() {
    if (pos == 450) {
        pos = -20;
      pipe1height = Math.floor((Math.random() * 450));
      pipe2height = 450 - pipe1height;
        pipe1.style.height = pipe1height + "px";
      pipe2.style.height = pipe2height + "px";
      
    } else {
      pos++; 
        pipe1.style.right = pos + 'px'; 
        pipe2.style.right = pos + 'px'; 
      }
    var pipe1down = 600 - pipe1height;
    var pipe2top = pipe2height;
    var a = parseInt(window.getComputedStyle(pipe1).getPropertyValue("right"));
    if (a>360) {
      // console.log("a "+a);
      // console.log(pipe2top+" " +pipe1down);
      var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
      var birddown = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
      // console.log(birdtop+" "+birddown);
      if ((birdtop < (600-pipe1down-50)) || (birddown < pipe2top-50)) {
// console.log("GameOver"+birdtop+" "+pipe1down+" "+birddown+"  "+pipe2top);
        console.log("Gameover!!");
      }
    }
}
setInterval(function () {
  var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
  bird.style.bottom = (currentbirdpos - 3) + "px";
  if (currentbirdpos <= 0) {
    // console.log("Game over!!");
  }
}, 10);
document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
    bird.style.bottom = (currentbirdpos + 90) + "px";
    let degrees = -45;
    bird.style.transform = `rotate(${degrees}deg)`;
    degrees = 45;
    bird.style.transform = `rotate(${degrees}deg)`;
  }
}
