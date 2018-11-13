const displayKudos = function () {
    $.get('/api/kudos/')
      .then(function (data) {
        render(data);
       
      });
}


  const getUsers = function () {
    $.get('/api/user/')
      .then(function (data) {
  
    
    
      });
  }

function render(data){
  data.forEach(kudo => {
    console.log(kudo);
    const div = $('<div>');
    div.addClass('kudoCard');
    const messageDiv = $('<div>')
    messageDiv.text(kudo.body);
    const senderDiv =$('<div>');
    senderDiv.text("sender : " + kudo.sender);

    div.append(messageDiv);
    div.append(senderDiv);
    $('#messages').append(div);
  })
}

$('#submit').on("click", function(){
    const message = {
      title: $('#title').val(),
      body: $('#message').val(),
      sender: $('#sender').val(),
      reciever: $('#reciever').val()
    }
    console.log(message)
    $.post('/api/kudos', message, function(res){
      console.log(res);
    })
})

displayKudos();









 