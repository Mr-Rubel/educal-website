
// topbar icon area start
$(window).scroll(function(){
    var topbtn = $(this).scrollTop();

    if(topbtn<400){
        $(".icon-top").fadeOut(200);
    }else{
        $(".icon-top").fadeIn(500);			
    }
});

// topbar icon area end

 $(window).scroll(function(){
    var topbtn = $(this).scrollTop();

    if(topbtn<100){
        $(".main-menu").addClass("bgct"); 
        $(".main-menu").removeClass("bgc"); 
    }
    else{
        $(".main-menu").removeClass("bgct"); 
        $(".main-menu").addClass("bgc"); 			
    }
});

$(".icon-top").click(function(){
    $("html, body").animate({scrollTop:0},1000);

    $(".icon-top").hide();
});
