let list = document.querySelector("#list");
var arrayMarkers=[];
let x=0;

addEventListener("load",function(){
    fetch('pages/bairros.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      /*console.log(response.data);*/
        x=0;
        
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
        
        item.innerHTML = '<a href=" " class="tile"><div id="tile'+x+'" onclick="entrarBairro(this.id)" class="bairro"><span>'+data.name+'</span></div></a>';
        
        list.appendChild(item);


        
        localStorage.setItem('tile'+x,data.id)
        localStorage.setItem('lat'+x,data.lat)
        localStorage.setItem('lng'+x,data.lng)
        x=x+1;
        

        arrayMarkers.push({lat:""+data.lat+"",lng:""+data.lng+""});
        
      
        
        
      
    })  
        
        
        var url_bairros = 'bairro.html';
        document.querySelector('.tile').href = url_bairros;
        
        var qtdDivs = document.querySelectorAll('.tile');

        for (var i = 0; i < qtdDivs.length; ++i) {

          var id1 = qtdDivs[i].querySelector('.bairro')
          var id = id1.id
          

          var item = qtdDivs[i]; 
          item.href = url_bairros+'?tileId='+id;
        }
    putMarkers(arrayMarkers);
    })

})







