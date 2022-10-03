var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
id = setInterval(frame, 1);
let pos = 0;
  function frame() {
    if (pos == 450) {
        pos = -20;
        let pipe1height = Math.floor((Math.random() * 450));
        pipe1.style.height = pipe1height + "px";
        pipe2.style.height = (450 - pipe1height) + "px";
    } else {
      pos++; 
        pipe1.style.right = pos + 'px'; 
        pipe2.style.right = pos + 'px'; 
      }
      
  }