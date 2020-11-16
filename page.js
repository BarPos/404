var i = 0

const text = `||404 That's an error.|The requested URL was not found on this server.|That’s all we know.`

var speed = 40;

function typeWriter() {
    if (i < text.length) {
        if(text.charAt(i) == '|'){
            var br = document.createElement('br')
            var txt = document.getElementById('text')
            txt.appendChild(br);
        }else{
            document.getElementById("text").innerHTML += text.charAt(i);
        }
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter()