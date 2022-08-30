$(document).ready(function() {

    function fadeAnime() {

        //下からふわっ

        $('.fadeUpMaskTrigger').each(function() { //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top - 10; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUpMask'); // 画面内に入ったらfadeUpというクラス名を追記
            } else {
                $(this).removeClass('fadeUpMask'); // 画面外に出たらfadeUpというクラス名を外す
            }
        });

        //下からふわっ

        $('.fadeUpTrigger').each(function() { //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top - 10; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
            } else {
                $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を外す
            }
        });

        //右からすっ
        $('.fadeRightTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeRight'); // 画面内に入ったらfadeRightというクラス名を追記
            } else {
                $(this).removeClass('fadeRight'); // 画面外に出たらfadeRightというクラス名を外す
            }
        });

        //左からすっ
        $('.fadeLeftTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeLeft'); // 画面内に入ったらfadeLeftというクラス名を追記
            } else {
                $(this).removeClass('fadeLeft'); // 画面外に出たらfadeLeftというクラス名を外す
            }
        });

        //開く
        $('.rotateYTrigger').each(function() {
            var elemPos = $(this).offset().top - 10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('rotateY'); // 画面内に入ったらrotateというクラス名を追記
            } else {
                $(this).removeClass('rotateY'); // 画面外に出たらrotateというクラス名を外す
            }
        });

    }


    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function() {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    $('.hamburger').click(function() {
        $(".mainmenu").fadeIn(500);
    });

    $('.mainmenu-close').click(function() {
        $(".mainmenu").fadeOut(500);
    });


    // $('#blogSlider').multislider({
    //     duration: 750,
    //     interval: 3000
    // });

    var scrollPos = 0;
    zoom = document.getElementById("zoom");
    zoomY = zoom.offsetTop;

    var img = "";
    var delta = 0;
    if (window.innerWidth > 767) {
        img = $('.pc .zoom-image img').attr('src');
        delta = 0.5;
    } else {
        img = $('.sp .zoom-image img').attr('src');
        delta = 0.3;
    }

    height = window.innerHeight;
    tm = $(".banner-mask").height() * delta / height * 100;
    posY = tm;
    posBgY = tm + (scrollPos - window.scrollY) / $(".banner-mask").height() * 50 + 9;

    $('.zoom-image img').after("<div class='hover-image' style='background-image: url('../img/banner.png'); background-size: 150vw;'></div>");

    $('.hover-image').attr('style', "background-image: url(" + img + "); background-size: 150vw; background-repeat: no-repeat; background-position: 50% " + posBgY + "%; left: 50%; top: " + posY + "%;");

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function() {
        fadeAnime();

        height = window.innerHeight;
        tm = $(".banner-mask").height() * delta / height * 100;

        scrollPos = (document.body.getBoundingClientRect()).top;
        posY = tm + (scrollPos - window.scrollY) / height * 50;

        posBgY = tm + (scrollPos - window.scrollY) / $(".banner-mask").height() * 50 + 9;

        $('.hover-image').attr('style', "background-image: url(" + img + "); background-size: 150vw; background-repeat: no-repeat; background-position: 50% " + posBgY + "%; left: 50%; top: " + posY + "%;");
    });

    ///655 225
    $(window).resize(function() {
        height = window.innerHeight;
        tm = $(".banner-mask").height() * delta / height * 100;
        posY = tm + (scrollPos - window.scrollY) / height * 50;
        posBgY = tm + (scrollPos - window.scrollY) / $(".banner-mask").height() * 50 + 9;

        if (window.innerWidth > 767)
            img = $('.pc .zoom-image img').attr('src');
        else
            img = $('.sp .zoom-image img').attr('src');

        $('.hover-image').attr('style', "background-image: url(" + img + "); background-size: 150vw; background-repeat: no-repeat; background-position: 50% " + posBgY + "%; left: 50%; top: " + posY + "%;");
    });
});