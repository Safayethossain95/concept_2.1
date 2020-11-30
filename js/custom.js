$(function(){
   
    $("#typed").typed({
			strings: ["Safayet", "a web designer"],
			typeSpeed: 30,
            backSpeed: 40,
            loop: true
		});
    
     $('.comments-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
        dots:true,
   
});
   
    
      var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top + 5
                }, 1000);
                return false;
            }
        }
    });
    
});