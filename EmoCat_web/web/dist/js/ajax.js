$(document).ready(function($){
  var dest = "http://45.76.99.126";
  $.get(dest + '/info/device/one_device2/1', function(res){
    console.log(res);
  });

});
