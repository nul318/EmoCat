// var dest = "http://45.76.99.126:8090";
var recentId = 1;
var dest = "http://localhost:8090";

$(document).ready(function($){
  $.ajaxSetup({ cache: false });
  EmoticonChart();

});

function EmoticonChart(){
  var mainGraph;
  $.ajax({
    url: dest + '/info/device/emocat/1',
    cache: false,
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data){
      mainGraph = Morris.Line({
        element: 'morris-area-chart',
        data: data,
        xkey: 'updatedAt',
        ykeys: ['happiness'],
        hideHover: 'auto',
        resize: 'true'
      });
      console.log(data);
    },
    error: function(){}
    }
  )
  setInterval(function(){ Update(mainGraph);}, 1000);
}

function Update(mainGraph){
  $.getJSON(dest + '/info/device/emocat/' + recentId, function(result){
    if(result.result != false) mainGraph.setData(result)
  });
}
