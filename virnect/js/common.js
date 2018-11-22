$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    //console.log(scrollTop);
    if (scrollTop > 900) {
        $('#content3').addClass('ani')
    }
    if (scrollTop > 1500) {
        $('#content4 li:eq(0)').addClass('slide')
    }
    if (scrollTop > 2166) {
        $('#content4 li:eq(1)').addClass('slide')
    }
    if (scrollTop > 3064) {
        $('#content4 li:eq(2)').addClass('slide')
    }
    if (scrollTop > 4027) {
        $('#content4 li:eq(3)').addClass('slide')
    }
    if (scrollTop > 200) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }

});

$('nav > ul > li > a').on('mouseenter focus', function () {
    if ($(this).parent().find('li').length > 0) {
        $('nav > ul > li > ul').css({
            'display': 'none'
        });
        $(this).next().css({
            'display': 'block'
        });
    } else {
        $('nav > ul > li > ul').css({
            'display': 'none'
        });
    }
    $(this).addClass('on');
});
$('nav > ul > li').on('mouseleave', function () {
    $('nav > ul > li > ul').css({
        'display': 'none'
    });
    $('nav > ul > li > a').removeClass('on');
});


function numberCounter(target_frame, target_number) {
    this.count = 0;
    this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function () {
    var self = this;
    this.diff = this.target_count - this.count;

    if (this.diff > 0) {
        self.count += Math.ceil(this.diff / 200);
    }

    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (this.count < this.target_count) {
        this.timer = setTimeout(function () {
            self.counter();
        }, 30);
    } else {
        clearTimeout(this.timer);
    }
};
var fired = false;
$(window).scroll(function(){
    if ($(window).scrollTop() > 6300 && fired === false) {
    new numberCounter("data-count", 49);
       fired = true;
    }
});


var pageAni = function (topVal) {
    $("html,body").stop().animate({
        "scrollTop": topVal
    }, 800);
};

$('.topScroll').on('click',function(e){
    pageAni(0);
    e.preventDefault();
});




























