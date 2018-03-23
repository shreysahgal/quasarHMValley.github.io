$(window).scroll(function(){
    $(".fadescroll").css("opacity", 1 - $(window).scrollTop() / 250);
  });