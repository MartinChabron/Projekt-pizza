(function($){
    $(function(){
       /*skrolovanie na sekcie*/
       $(".jq--scroll-our-pizza").click(function(){
        $("html, body").animate({scrollTop:$(".jq--our-pizza").offset().top-80}, 1000);
       });

       $(".jq--scroll-about-pizza").click(function(){
        $("html, body").animate({scrollTop:$(".jq--about-pizza").offset().top-80}, 1000);
       });

       $(".jq--scroll-reference").click(function(){
        $("html, body").animate({scrollTop:$(".jq--reference").offset().top-80}, 1000);
       });

       $(".jq--scroll-gallery").click(function(){
        $("html, body").animate({scrollTop:$(".jq--gallery").offset().top-90}, 1000);
       });

       $(".jq--scroll-kontakt").click(function(){
        $("html, body").animate({scrollTop:$(".jq--kontakt").offset().top-90}, 1000);
       });

       //scroll bottons to sections

       $(".jq--scroll-button-first").click(function(){
        $("html, body").animate({scrollTop:$(".jq--our-pizza").offset().top-80}, 1000);
       });

       $(".jq--scroll-button-second").click(function(){
        $("html, body").animate({scrollTop:$(".jq--reference").offset().top-80}, 1000);
       });

       /*****mobile navigation */
       $(".jq--nav-icon").click(function(){
        $(".nav-background").fadeToggle();
        $(".mobile-nav-back").fadeToggle();
        $("nav ul").fadeToggle();
       });

       /* Change hamburger to cross vice versa */
       




    });
})(jQuery);

(function($){
    $(function(){
 
 $(".jq-image-hamburger").click(function(){
 
    if($(".jq-image-hamburger").attr("src")=="images/more.png")
 
 
    {
       
       $($(".jq-image-hamburger").attr("src","images/arrow.png"));
 
 
    }
       else
    {
       
       $($(".jq-image-hamburger").attr("src","images/more.png"));
 
    }
    
 
     });
        
    });
 
 
})(jQuery);

