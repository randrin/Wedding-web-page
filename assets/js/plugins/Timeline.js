/********************** Scroll Animation "START" ************************************/
$(document).ready(function(){
var $animation_elements = $('.anim');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
var $element = $(this);
var element_height = $element.outerHeight();
var element_top_position = $element.offset().top;
var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
if ((element_bottom_position >= window_top_position) &&
(element_top_position <= window_bottom_position)) {
$element.addClass('animated');
} else {
$element.removeClass('animated');
}
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});
/********************** Scroll Animation "END" ************************************/

/********************** Change color of center aligned animated content small Circle  "START" ************************************/
$(document).ready(function(){
    $(" .debits").hover(function(){
        $(" .center-right").css("background-color", "#4997cd");
        }, function(){
        $(" .center-right").css("background-color", "#fff");
    }); 
});
$(document).ready(function(){
    $(".credits").hover(function(){
        $(".center-left").css("background-color", "#4997cd");
        }, function(){
        $(".center-left").css("background-color", "#fff");
    }); 
});
/********************** Change color of center aligned animated content small Circle  "END" ************************************/

/********************** Timer Count "START" ************************************/
$(document).ready(function(){
function makeTimer() {

			var endTime = new Date("05 January 2019 10:00:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Jours</span>");
			$("#hours").html(hours + "<span>Heures</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Secs</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
    });
/********************** Timer Count "END" ************************************/