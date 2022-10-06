let list = document.querySelector("#list");
var arrayMarkers=[];

addEventListener("load",function(){
    fetch('test.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      /*console.log(response.data);*/

        response.data.forEach(function(data) {
        let item = document.createElement("li");

        if(data.level==3)
        {
        item.classList.add("vermelho");
        }
        if(data.level==2)
        {
        item.classList.add("amarelo");
        }
        if(data.level==1)
        {
        item.classList.add("verde");
        }
        
        item.innerHTML = '<div class="bairro"><span>'+data.name+'</span></div>';
        
        list.appendChild(item);

        

        

        arrayMarkers.push({lat:""+data.lat+"",lng:""+data.lng+""});
        
      
        
        
      
    })
    putMarkers(arrayMarkers);
    })
})


/*let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", function() {
  fetch('test.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      response.data.forEach(function(user) {
        let item = document.createElement("li");
        item.classList.add("item");
        
        item.innerHTML = '<img src="'+user.avatar+'" /><span>'+user.first_name+'</span>';
        
        list.appendChild(item);
      })
    })
})*/