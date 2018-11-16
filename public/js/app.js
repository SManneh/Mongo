const displayKudos = function () {
    $.get('/api/kudos/')
      .then(function (data) {
        render(data);
       
      });
}


  const getUsers = function () {
    $.get('/api/user/')
      .then(function (data) {
        console.log(data)


  for (let i = 0; i< data.length; i++){
    $('#sender').append(`<option value='${data[i].name}'>${data[i].name}</option>`)
    $('#reciever').append(`<option value='${data[i].name}'>${data[i].name}</option>`)

  } 
})
  }



const render = function(data){
  data.forEach(kudo => {
console.log(data)
let cardDiv = $('<div>').addClass('card')
let title = $('<h5>').text(kudo.title)
let sender = $('<h6>').text(kudo.sender)
let cardBody = $('<div>').addClass('card-body')
let reciever = $('<h6>').text(kudo.reciever)
let body = $('<p>').text(kudo.body)
cardBody.append(reciever,body)
cardDiv.append(title, sender, cardBody)
console.log(kudo.sender)
$('#messages').append(cardDiv)

})

}

$('#submit').on("click", function(){
    const message = {
      title: $('#title').val(),
      sender: $('#sender').val(),
      reciever: $('#reciever').val(),
      body: $('#message').val()
      
    }
    console.log(message)
    $.post('/api/kudos', message, function(res){
      console.log(res);
    })
    displayKudos();
})

displayKudos();
getUsers();








 