
var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
var bird = document.getElementById("bird");
var movepipe = setInterval(movePipe, 5);
var movebird = setInterval(moveBird, 10);
var pipe1right = parseInt(window.getComputedStyle(pipe1).getPropertyValue("right"));
var pipe1left = parseInt(window.getComputedStyle(pipe1).getPropertyValue("left"));
var birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
var birddown = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
var isGameOver = 1;
var gameover = document.getElementById('gameover')

var pos = 0;
var j = 0;
var pipe1height = parseInt(window.getComputedStyle(pipe1).getPropertyValue("height"));
var pipe2height = parseInt(window.getComputedStyle(pipe2).getPropertyValue("height"));
var score = 0;
var highscore = 0;
var i = 0;
var body = document.querySelector('body');
var scene = document.getElementById('scene');
var score_list = document.getElementsByClassName('top1');


window.onload = function () {
  highscore = localStorage.getItem("score");
  var a = document.getElementById("hiscore");
  a.innerText = highscore;
}
// Function to move pipes
function movePipe() {
  if (pos == 450) {
    pos = -20;
    pipe1height = Math.floor((Math.random() * 450));
    pipe2height = 450 - pipe1height;
    pipe1.style.height = pipe1height + "px";
    pipe2.style.height = pipe2height + "px";
  }
  else {
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
  if (birddown == 63) {
    let Gameover = new Audio("./audio/hit.wav");
    Gameover.play();
    clearInterval(movepipe);
    clearInterval(movebird);
    gameover.style.display = "block";
    setTimeout(() => {
            window.location.reload();
          }, 2000);
    if (score > highscore) {
      localStorage.setItem("score", score);
    }
    isGameOver = 0;

  }
  if ((pipe1right + 55) >= 219 && (pipe1right + 60) <= 320) {
    if ((birdtop < (600 - pipe1down - 5)) || (birddown < pipe2top - 20)) {
      clearInterval(movepipe);
      clearInterval(movebird);
      gameover.style.display = "block";
      setTimeout(() => {
            window.location.reload();
          }, 2000);
      if (score > highscore) {
        localStorage.setItem("score", score);
      }
      isGameOver = 0;
      let Gameover = new Audio("./audio/hit.wav");
      Gameover.play();
    }
  }
  else if ((pipe1right + 60) == 321) {
    score++;
    var s = document.getElementById('score');
    s.innerText = score;
    let point = new Audio("./audio/point.wav");
    point.play();
  }
}


//Function to move birds
function moveBird() {
  var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
  bird.style.bottom = (currentbirdpos - 3) + "px";
}


//Spacebar button function
document.onkeydown = function (e) {
  if ((e.keyCode == 32||e.keyCode==38) && isGameOver) {
    var currentbirdpos = parseInt(window.getComputedStyle(bird).getPropertyValue("bottom"));
    var temp = setInterval(jump, 1);
    function jump() {
      if ((pipe1right + 55) >= 219 && (pipe1right + 60) <= 320) {
        if ((birdtop < (600 - pipe1down - 5)) || (birddown < pipe2top - 20)) {
          clearInterval(movepipe);
          clearInterval(movebird);
          clearInterval(temp);
          gameover.style.display = "block";
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          if (score > highscore) {
            localStorage.setItem("score", score);
          }
          isGameOver = 0;
          let Gameover = new Audio("./audio/hit.wav");
          Gameover.play();
        }
      }
      j++;
      bird.style.bottom = (currentbirdpos + j) + "px";
      if (j > 100) {
        j = 0;
        clearInterval(temp);
      }
    }
    var imgsrc = document.getElementById("bird");
    imgsrc.style.backgroundImage = "url(./img/up-removebg-preview.png)";
    isGameOver = 1;
  }
}
document.onkeyup = function (e) {
  if (e.keyCode == 32||e.keyCode==38) {
    var imgsrc = document.getElementById("bird");
    imgsrc.style.backgroundImage = "url(./img/noup-removebg-preview.png)";
  }
}

//Toggling of dark and light mode
function togglemode() {
  if (window.getComputedStyle(body).getPropertyValue('background-color') == 'rgb(255, 255, 255)') {
    body.style.backgroundColor = 'rgb(37, 37, 37)';
    scene.style.backgroundColor = 'white';
    for (let i = 0; i < score_list.length; ++i) {
      score_list[i].style.color = 'white';
    }
    var toggle = document.getElementById('toggle');
    toggle.style.backgroundImage = "url(./img/moon.jpg)";
  }
  else {
    body.style.backgroundColor = 'white';
    scene.style.backgroundColor = 'rgb(37, 37, 37)';
    for (let i = 0; i < score_list.length; ++i) {
      score_list[i].style.color = 'rgb(37, 37, 37)';
      var toggle = document.getElementById('toggle');
      toggle.style.backgroundImage = "url(./img/sun.avif)";
    }
  }
}

//Function to move background base
setInterval(moveimage, 5);
function moveimage() {
  if (isGameOver) {
    i -= 0.5;
    document.getElementById('base').style.backgroundPosition = i + "px";
  }
}


