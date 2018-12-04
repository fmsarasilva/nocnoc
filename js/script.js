/*global $*/

$('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});



$('.faq-list dt').click(function () {

    var myList = $(this).next('dd');

    if (!$(this).hasClass('selected')) {
        $('.faq-list dt').removeClass('selected');
        $(this).addClass('selected');
        $('.faq-list dd').hide();
        myList.show();
    } else {

        $(this).removeClass('selected');
        myList.hide();
    }


    return false;
});


$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }

    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});

(function ($) {


    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);
var allMods = $(".module");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });
});



$(function () {
    $('.monster').fadeIn('slow');
});

$(document).ready(function () {

    $(window).scroll(function () {


        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 1500);

            }

        });

    });

});

jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('body').addClass('overflow');
        $('.loader').addClass('loaded');
        $('#main').addClass('visible');
    }, 200);

    var detalhe = $('.detalhe');

    $('.abreDetalhe').click(function (e) {
        //console.log(e); 
        e.preventDefault();
        $(".img-membro").toggleClass("img-membro-transition");
        //detalhe.toggleClass('aberto');
    })
    $('.btnFechar').click(function (e) {
        //console.log(e); 
        detalhe.toggleClass('aberto');
        $(".img-membro").toggleClass("img-membro-transition");
    })
});


$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});

$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});

$('a.controls').click(function(){
  
  // Current 
  
  
  alert ('control!');
  
  });  


//
//$('nav li').mouseenter(function () {
//    //make sure menu does not fly off the right of the screen
//    if ($(this).children('ul').offset().left + 200 > $(window).width()) {
//        $(this).children('ul').css('right', 180);
//    }
//});