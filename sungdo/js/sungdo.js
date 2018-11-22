var $seletor = $(".family_list");
var $ftnseletor = $(".area .familysite-box .family-open-btn");
var nowIdx = 0;
var sideIdx = 0;
var num = 0;
var $mnu = $(".side_menu>ul>li>a");
var arrTopVal = []; //article의 top값을 저장할 배열
var pageAni = function (topVal) {
    $("html,body").stop().animate({
        "scrollTop": topVal
    }, 800);
};
var $slides = $(".slides-container>li");
var oldIdx = nowIdx;
var bow = function () {
    //1) 이전슬라이드 사라짐
    $slides.eq(oldIdx).stop().fadeOut('fast');
    //2) 이번에 나타날 슬라이드 보임
    $slides.eq(nowIdx).stop().fadeIn('fast');
    oldIdx = nowIdx;
}

/*setInterval(function(){
		var image = $("section>.slides>.slides-container>li>img").index(this);

		$("section>.slides>.slides-container>li").eq(num).stop().fadeOut('fast');


		if(num>2){
			num=0;
		}
		else{
			num++;
		}
		$("section>.slides>.slides-container>li").eq(num).stop().fadeIn('fast');
		$("section>.slides>.slides-container>li>img").eq(num).addClass("zum").parent().siblings().children('img').removeClass("zum");
	}, 5000);
*/

$('header .container>nav>.gnb_container>.gnb>li').on('mouseenter focusin',function(){
    $(this).addClass('on');
});
$('header .container>nav>.gnb_container>.gnb>li').on('mouseleave',function(){
    $(this).removeClass('on')
});

$mnu.on("click", function (evt) {
    nowIdx = $mnu.index(this); //인덱스 번호구함

    $mnu.eq(nowIdx).next('p').addClass("lite").parent().siblings().children('p').removeClass("lite");

    pageAni(arrTopVal[nowIdx]);

    evt.preventDefault();
});

$(function () {
    function swing() {
        $('.scroll_down').animate({
            'top': '640px',
            'opacity': 1
        }, 500).animate({
            'top': '655px',
            'opacity': 0.3
        }, 500, swing);
    }
    swing();
});


$seletor.on("click", function (evt) {
    $(".family_list>.sungdo").slideDown().css("display", "block");
    evt.preventDefault();
});
$seletor.on("mouseleave", function () {
    $(".family_list>.sungdo").slideUp();

});



$("a.family-open-btn").click(function () {
    $(this).next("ul").stop().slideToggle(200);
    return false;
});



$(".familysite-box").mouseleave(function () {
    $(this).find("ul").stop().slideUp(200);
    return false;
});

/*$(".familysite-box .family-open-btn").on('click', function(e){
	e.preventDefault();
	$('.familysite-box .family-list').animate({
		height : '128px'
	}, 500);
});
	

$(".familysite-box .family-list").on("mouseleave",function(){
	$('.familysite-box .family-list').animate({
		height : 0
	}, 500);
})*/

$(".language>a").on("click", function (evt) {

    nowIdx = $(".language>a").index(this);
    $(".language>a").eq(nowIdx).addClass("on").siblings().removeClass("on");

    evt.preventDefault();
});



//2.offset().top을 이용해 article의 top값을 저장
$("article").each(function (idx, element) {
    arrTopVal[idx] = $(this).offset().top - 108;
});

//1.메뉴에 대한 클릭 이벤트 구문
$mnu.bind("click", function (evt) {
    nowIdx = $mnu.index(this); //인덱스 번호구함

    pageAni(arrTopVal[nowIdx]);

    evt.preventDefault();
});

//3 최초 load시 초기화면 상태 설정
$(document).on("load", function (evt) {

    pageAni(arrTopVal[nowIdx]);

    evt.preventDefault();
})

//4. 스크롤 높이값에 따른 메뉴의 롤오버 색상변화
$(window).on("scroll", function () {
    //현재 스크롤바의 top값 
    var scrollTop = $(window).scrollTop();
    //console.log("scrollTop = ",scrollTop);

    for (var i = 0; i < $mnu.size(); i++) {
        if (scrollTop >= arrTopVal[i] - 500) {
            $mnu.eq(i).children("p").addClass("lite").parent().parent().siblings().children().children('p').removeClass("lite");
        }
    };

});

$(".top").on("click", function (evt) {
    pageAni(arrTopVal[0]);

    evt.preventDefault();
});
$('a.bottom-to-top-btn').on('click', function (e) {
    pageAni(0);
    e.preventDefault();
});
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    //console.log(scrollTop);
    if (scrollTop > 500) {
        $('.scroll-fade li:eq(0)').css({
            'opacity': 1,
            'transition-delay': '0.1s'
        });
        $('.scroll-fade li:eq(1)').css({
            'opacity': 1,
            'transition-delay': '0.3s'
        });
        $('.scroll-fade li:eq(2)').css({
            'opacity': 1,
            'transition-delay': '0.5s'
        });
        $('.scroll-fade li:eq(3)').css({
            'opacity': 1,
            'transition-delay': '0.7s'
        });
    }
    if (scrollTop > 0) {
        $('header').addClass('white');

        $(".language>a").eq(1).mouseenter(function () {
            $(".language>a").eq(1).css({
                "border-bottom": "3px solid #0060A1"
            })
        });
        $(".language>a").eq(1).mouseleave(function () {
            $(".language>a").eq(1).css({
                "border-bottom": "none"
            })
        });
    } else {
        $('header').removeClass('white');

        $(".language>a").eq(1).mouseenter(function () {
            $(".language>a").eq(1).css({
                "border-bottom": "3px solid white"
            })
        });
        $(".language>a").eq(1).mouseleave(function () {
            $(".language>a").eq(1).css({
                "border-bottom": "none"
            })
        });
    }
});

/*$(".slides-prev").on("click",function(){
            if(nowIdx < 1){
                nowIdx = 3;
            }else{
                nowIdx--;
            }
            $('.slides-container li .article p.title').eq(nowIdx).addClass('right');
            $('.slides-container li .article p.content').eq(nowIdx).addClass('right2');
            $('.slides-container li .article a').eq(nowIdx).addClass('right3');
            $("section>.slides>.slides-container>li").eq(nowIdx).stop().fadeOut('fast');	
            $("section>.slides>.slides-container>li>img").eq(nowIdx).addClass("zum").parent().siblings().children('img').removeClass("zum");
            bow();
            
        });
        $(".slides-next").on("click",function(){
            if(nowIdx > 2){
                nowIdx = 0
            }else{
                nowIdx++;
            }
            $('.slides-container li .article p.title').eq(nowIdx).addClass('right');
            $('.slides-container li .article p.content').eq(nowIdx).addClass('right2');
            $('.slides-container li .article a').eq(nowIdx).addClass('right3');
            $("section>.slides>.slides-container>li").eq(nowIdx).stop().fadeOut('fast');
            bow();
            $("section>.slides>.slides-container>li>img").eq(nowIdx).addClass("zum").parent().siblings().children('img').removeClass("zum");
            
        });
*/
$('#container .location-inner ul li:eq(1)').on('click', function (e) {
    $(this).find(".location-2dep").slideDown().css("display", "block");
    e.preventDefault();
});
$('#container .location-inner>ul>li:eq(2)').on('click', function (e) {
    $(this).find(".location-2dep").slideDown().css("display", "block");
    e.preventDefault();
});
$('#container .location-inner>ul>li').on("mouseleave", function () {
    $(".location-2dep").slideUp();
});
$('a.gnb_open').on('click', function (e) {
    $('.popup-wrapper').stop().animate({
        'right': 0
    });
    $('.popup-pop-bg').css({
        'display': 'block'
    });
    e.preventDefault();
});

$('.sitemapList > ul > li > a').on('click', function (e) {
    if ($(this).parent().find('li').length > 0 && $(window).width() <= 1220) {
        e.preventDefault();
        var height = 0;
        $(this).parent().find('> ul > li').each(function () {
            height += $(this).outerHeight();
        });
        var orignalHeight = $('.sitemapList > ul > li.open > ul').outerHeight();
        $('.sitemapList > ul > li.open > ul').css({
            'height': orignalHeight + 'px'
        });
        $('.sitemapList > ul > li > ul').css({
            'height': 0
        });
        $(this).next().css({
            'height': height + 'px'
        });
        $('.sitemapList > ul > li').removeClass('open');
        $(this).parent().addClass('open');
    }
});


$('.popup-close-box a').on('click', function (e) {
    $('.popup-wrapper').stop().animate({
        'right': '-100%'
    });
    $('.popup-pop-bg').css({
        'display': 'none'
    });
    e.preventDefault();
});
$('.header_family a:eq(0)').on('click', function (evt) {
    evt.preventDefault();
    $('.modal-wrapper').css({
        'display': 'block'
    });
    $('.popup-pop-bg').css({
        'display': 'block'
    });
    $('html,body').addClass('popup');
})

$('.modal-close-box a').on('click', function (e) {
    $('.modal-wrapper').css({
        'display': 'none'
    });
    $('.popup-pop-bg').css({
        'display': 'none'
    });
    $('html,body').removeClass('popup');
    e.preventDefault();
});
