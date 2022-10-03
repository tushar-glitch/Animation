var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
id = setInterval(frame, 5);
let pos = 0;
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++; 
        pipe1.style.right = pos + 'px'; 
        pipe2.style.right = pos + 'px'; 
    }
  }