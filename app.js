var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
var bird = document.getElementById("bird");
var movepipe = setInterval(movePipe, 10);
var movebird = setInterval(moveBird, 10)
let pos = 0;
var pipe1height = parseInt(window.getComputedStyle(pipe1).getPropertyValue("height"));
var pipe2height = parseInt(window.getComputedStyle(pipe2).getPropertyValue("height"));
var isGameOver = 1;
var score = 0;
var highscore = 0;
window.onload = function () {
  highscore = localStorage.getItem("score");
  var a = document.getElementById("hiscore");
  a.innerText = highscore;
}
// Function to move pipes
function movePipe() {
  // birdleft is 180 && birdright is 220
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

  //Checking if bird hits the pipe OR bird hits the bottom
  var pipe1down = 600 - pipe1height;
  var pipe2top = pipe2height;
  var pipe1right = parseInt(window.getComputedStyle(pipe1).getPropertyValue("right"));
  var pipe1left = parseInt(window.getComputedStyle(pipe1).getPropertyValue("left"));
  var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  var birddown = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
  if (birddown == -15) {
    console.log("Gameover!!");
    clearInterval(movepipe);
    clearInterval(movebird);
    if (score > highscore) {
      localStorage.setItem("score", score);
    }
    isGameOver = 0;
  }
  if ((pipe1right+55)>=219&&(pipe1right+60)<=320) {
    if ((birdtop < (600 - pipe1down - 5)) || (birddown < pipe2top - 20)) {
      console.log("Gameover!!");
      clearInterval(movepipe);
      clearInterval(movebird);
      if (score > highscore) {
      localStorage.setItem("score", score);
    }
      isGameOver = 0;
    }
  }
  else if ((pipe1right + 60) == 321) {
    score++;
    console.log(score);
    var s = document.getElementById('score');
    s.innerText = score;
  }
}


//Function to move birds
function moveBird() {
  var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
  bird.style.bottom = (currentbirdpos - 3) + "px";
}


//Spacebar button function
document.onkeydown = function (e) {
  if (e.keyCode == 32&&isGameOver) {
    var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
    bird.style.bottom = (currentbirdpos + 90) + "px";
  }
}
