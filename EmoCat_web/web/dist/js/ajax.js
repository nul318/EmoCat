
var recentId = 1;
// var dest = "http://45.76.99.126:8090";
var dest = "http://127.0.0.1:3000";

$(document).ready(function($){
  $.ajaxSetup({ cache: false });
  EmoticonChart();

});

function EmoticonChart(){
  var mainGraph;
  $.ajax({
    url: dest + '/info/device/emocat/1',
    crossDomain: true,
    cache: false,
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data){
      mainGraph = Morris.Line({
        element: 'morris-area-chart',
        data: data,
        xkey: 'updatedAt',
        xLabelAngle: 45,
        // hideHover: 'auto',
        pointSize: 0,
        ykeys: ['happiness'],
        xLabelMargin: 1,
        resize: 'true',
        labels: ['happiness', 'time'],
        axes: 'x'
      });
      console.log(data);
      // console.log(data.length);
      // recentId = data[data.length-1].id;
    },
    error: function(){}
    }
  )
  setInterval(function(){ Update(mainGraph);}, 1000);
}

function Update(mainGraph){
  $.getJSON(dest + '/info/device/emocat/1', function(result){
    result.forEach(function(val, idx){
      val.happiness = val.happiness.toFixed(2);
    });
    mainGraph.setData(result)
  });
}
