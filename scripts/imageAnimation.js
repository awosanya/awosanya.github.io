$("#gameSlide > div:gt(0)").hide();

setInterval(function() { 
  $('#gameSlide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#gameSlide');
},  3000);
