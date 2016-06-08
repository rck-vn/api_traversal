var button = document.getElementById('buttoni');
var input = document.getElementById('input');
var msg = document.getElementById('answer');

button.addEventListener("click",callback);
function callback(){
msg.innerHTML = ""
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status < 400){
      var userInput = JSON.parse(request.responseText)
      var enter = userInput.Search
      console.log("enter: ", enter);
      for (var i = 0; i < enter.length; i++) {
        var title = enter[i].Title
        var poster = enter[i].Poster
        if(poster === "N/A"){
          var add = document.createElement("h3");
          add.className = "movie_poster"
          add.innerHTML = title+"<img class= movie_poster src="+"./mockups/images/no_image.png"+">"
          msg.appendChild(add)
        }else{
          var add = document.createElement("h3");
          add.className = "movie_poster"
          add.innerHTML = title+"<img class= movie_poster src="+poster+">"
          msg.appendChild(add)
        }
      }
    }
  }
  request.open("GET","http://www.omdbapi.com/?s="+input.value)
  request.send()
}
