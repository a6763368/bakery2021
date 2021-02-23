$('#banner-box').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
});


$(document).ready(function(){
    $("#home").click(function(){
      $("#reel").css({"display":"block"});
    });
  });

  $('#left').click(function() {
      $("#reel").css({"display":"none"});
  });
  