// Navbar Script
(function($) {
    "use strict"; 
    $(window).on('scroll load', 
    function() {
		if ($(".navbar").offset().top > 60) 
        {$(".fixed-top").addClass("top-nav-collapse");} 
        
        else 
        {$(".fixed-top").removeClass("top-nav-collapse");}
    }
);
    
// Scroll Script 
	$(function() {
		$(document).on('click', 'a.page-scroll', 
        function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate ({scrollTop: $($anchor.attr('href')).offset().top}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });
})(jQuery);

//Script type animation
function typeWrite(obj){
    const text =  obj.innerHTML.split('');
    obj.innerHTML = ' ';
    
    text.forEach(function(eqfr, i)
    {   
        setTimeout(function()
        {obj.innerHTML += eqfr;}, 75 * i)});
    }

    const write = document.querySelector('.write');
typeWrite(write);