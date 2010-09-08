/* Author: 

*/
$( function(){
  window.setInterval(function(){
    var d = $('ul.photos li')
    var index = 0;
    var n = $(d[index]).remove();
    $('ul.photos')[0].insert({bottom:n})
  }, 3000);
});























