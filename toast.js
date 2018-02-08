 (function(){//سروال يقوم بالعد على الرئيسية
  var $prog2 = $('.progress-indicator-2');
function updateProgress(perc){
    $prog2.css({width : perc*100 + '%'});
}
    var $w = $(window);
    var $circ = $('.animated-circle');
    var $progCount = $('.progress-count');
    var $prog2 = $('.progress-indicator-2');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function(){
        var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
        updateProgress(perc);
    });
 
    function updateProgress(perc){
        var circle_offset = 126 * perc;
        $circ.css({
            "stroke-dashoffset" : 126 - circle_offset
        });
        $progCount.html(Math.round(perc * 100) + "%");
 
        $prog2.css({width : perc*100 + '%'});
    }
 
}());
$(".menu-icon3").click(function(){//منيل بالرئيسية اعلى الواجهة
   $(this).parent().toggleClass("close");
});

function wipeout() {//اشعار عند الدخول
  setTimeout(function() {
    $(".ps-toast").removeClass("bounceInRight").addClass("bounce");
    setTimeout(function() {
      $(".ps-toast").addClass("bounceOutRight");
    }, 4000);
  }, 5000);
}
wipeout();

