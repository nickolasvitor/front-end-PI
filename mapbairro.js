var map;
var markers =   [];
var heatmap;

function initMap(){

    var url = window.location.search;
    var urlParametro = new URLSearchParams(url);
    var idBairro = urlParametro.get('tileId')
    var idmatch = localStorage.getItem(idBairro)

    idmatch=idmatch-1;

    var latMAP = parseFloat(localStorage.getItem('lat'+idmatch))
    var lngMAP = parseFloat(localStorage.getItem('lng'+idmatch))
    
    map= new google.maps.Map(document.getElementById("map"),{
    center: {lat: latMAP,lng: lngMAP},
    zoom:15     });
    
    

    heatmap = new google.maps.visualization.HeatmapLayer();
            }

function putMarkers(arrayMarkers){
   console.log(arrayMarkers);
   

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