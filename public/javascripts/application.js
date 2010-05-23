// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

Event.observe( window, 'load', function(){
  window.setInterval(function(){
    d = $$('ul.photos li')
    index = 0 // Math.round(Math.random()*6)
    //Effect.Fade(d[index]) 
    //setTimeout(function(){
      n = Element.remove(d[index])
      $$('ul.photos')[0].insert({bottom:n})
    //},200);
  }, 3000);
})

