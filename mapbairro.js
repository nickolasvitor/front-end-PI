var map;
var markers =   [];
var heatmap;

let lollat= []
let lollng= []
let lollat1;
let lollng1;
function initMap(){
   

    var url = window.location.search;
    var urlParametro = new URLSearchParams(url);
    var idBairro = urlParametro.get('tileId')
    var idmatch = localStorage.getItem(idBairro)
    idmatch=idmatch-1;

    fetch('pages/bairros.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      /*console.log(response.data);*/
        x=0;
        
        response.data.sort(function(a, b) {
          return (b.level) - (a.level);
      });

        response.data.forEach(function(data) {
            lollat.push(''+data.lat+'');
            lollng.push(data.lng);
        })

        var idBairro1 = urlParametro.get('tileId')
       

       var arrayOfStrings = idBairro1.split("tile");
     

        lollat1 = response.data[arrayOfStrings[arrayOfStrings.length-1]].lat
        lollng1 = response.data[arrayOfStrings[arrayOfStrings.length-1]].lng
        

        
        
        
         var latMAP = parseFloat(lollat1)
         var lngMAP = parseFloat(lollng1)

         map= new google.maps.Map(document.getElementById("map"),{
            center: {lat: latMAP,lng: lngMAP},
            zoom:15     }); 

            
        

    })

    

    

    
   
 

     
    
    

    heatmap = new google.maps.visualization.HeatmapLayer();
            }

function putMarkers(arrayMarkers){
   
   

    $.each(arrayMarkers,function(key,point){

        var position = new google.maps.LatLng(point.lat,point.lng);

        var marker = new google.maps.Marker({position:position,map:map})

        markers.push(marker)
    })
}

function clearMarkers(){
    $.each(markers,function(key,marker){
        marker.setMap(null);
    })
    markers =[];
}
function putHeatmap(){
    clearMarkers();
    var _points=[];
    $.each(points,function(key,point){
        var position = new google.maps.LatLng(point.lat,point.lng);

        

        _points.push(position)
    })
    heatmap.setData(_points);
    heatmap.setMap(map);
}