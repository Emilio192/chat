var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})



function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            body{
              min-height: 100vh;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-direction: column;
              background:#65C18C;
          }
          h1{
            font-family:'Press Start 2P';
          }
            div{
              
            }
            .todo{
              width:32%;
              height:auto;
              background:#C1F4C5;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-direction: column;
              border-radius:12px;
              box-shadow:10px 10px 10px black;
            }
            input[type="text"]{
              background:#65C18C;
              border:none;
              padding:8px;
              border-radius:5px;
              margin:10px;
              color:black;
            }
            input[type="submit"]{
              border-radius:10px;
              font-size:18px;
              background:transparent;
              margin:10px;
              border:solid #65C18C;
              color:#65C18C;
              
            }
            input[type="submit"]:hover{
              transition: all .5s ease-in-out;
              font-size:23px;
              background:#65C18C;
              color:#C1F4C5;
              box-shadow:5px 5px 0px black;
            }
            </style>`);
            
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value    
  };

  socket.emit('new-message', message);
  return false;
}