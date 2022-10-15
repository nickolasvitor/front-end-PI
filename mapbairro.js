var map;
var markers =   [];
var heatmap;

function initMap(){

    
    map= new google.maps.Map(document.getElementById("map"),{
    center: {lat: -8.078734,lng: -34.909589},
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