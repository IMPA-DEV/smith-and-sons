$(function() {

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function(e) { //Change
        $(this).find('input[type="submit"]').css('pointer-events', 'none');
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('#popup').show();
            $('.popup').animate({
                top: '30%',
                opacity: 1
            }, 800 );
            th.trigger("reset");
            $('.popup-sms').slideUp( 100 ).delay( 800 ).fadeIn( 400 );
        }).error(function(){
            alert("Error!");
        }).success (function(){
            // $(dataLayer.push({'event': 'event_smith_and_suns'}));
        });
        return false;
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

    //scroll top-link transparent
    $(function() {
        var header = $("#top-line");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 30) {
                header.addClass("top-scroll").addClass("bg-line");
            } else {
                header.removeClass("top-scroll").removeClass("bg-line");
            }

            return false;
        });
    });
	
});
