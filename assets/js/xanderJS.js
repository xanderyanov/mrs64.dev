var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (!(isMobile.any())) {
    function mainHeightFunction() {
        var windowH = $(window).height();
        console.log('windowH ' + windowH);

        var headerH = $('.site__header').outerHeight();
        console.log('headerH ' + headerH);

        var centerH = $('.site__center').outerHeight();
        console.log('centerH ' + centerH);

        var footerH = $('.site__footer').outerHeight();
        console.log('footerH ' + footerH);

        var siteH = headerH + centerH + footerH;
        console.log('siteH ' + siteH);

        var wrapperH = $('.site__wrapper').outerHeight();
        console.log('wrapperH ' + wrapperH);

        if (wrapperH < windowH) {
            $('.site__wrapper').css('height', '100vh');
            console.log('GO');
        }
    };
}




$(window).on('load', function(){
    $("#loader").delay(500).fadeOut("slow");
    $(".mask").delay(1000).fadeOut("slow");
});


$(function () {

    //
    // $(window).on('load', function(){
    //     $("#loader").delay(500).fadeOut("slow");
    //     $(".mask").delay(1000).fadeOut("slow");
    // });

    // раскрытие меню по кнопке
    $('.menuButton').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.topMenu__area').slideUp();
            $('.topMenu__area').removeClass('topMenu__area_open');
        }
        else {
            $(this).addClass('open');
            $('.topMenu__area').slideDown();
            $('.topMenu__area').addClass('topMenu__area_open');
        }
    });

    $('.sotrudnik__btn2').click(function (e) {
        var scroll_el = $('.gallery__area_sotrudnik');
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');

            $('.gallery__area_sotrudnik').slideUp();
            $('.gallery__area_sotrudnik').removeClass('gallery__area_sotrudnik_open');
            $(this).text('Посмотреть работы');
        }
        else {
            $(this).addClass('open');
            $(this).text('Скрыть работы');
            $('.gallery__area_sotrudnik').slideDown();
            $('.gallery__area_sotrudnik').addClass('gallery__area_sotrudnik_open');
            // $('body,html').animate({scrollTop: 500}, 400);
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
        }
    });


    $('.sotrudnik__btn1').click(function (e) {
        e.preventDefault();
        var scroll_el = $('.sertif__areaWrapper');
        if ($(this).hasClass('open')) {
            $(this).removeClass('open').text('Дипломы и сертификаты');
            $('.sotrudnikFlex').css({'marginLeft': '0'});
        }
        else {
            $(this).addClass('open').text('Скрыть сертификаты');
            $('.sotrudnikFlex').css({'marginLeft': '-100%'});
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
    });
    $('.sertif__close').click(function (e) {
        e.preventDefault();
        $('.sotrudnik__btn1').removeClass('open').text('Дипломы и сертификаты');
        $('.sotrudnikFlex').css({'marginLeft': '0'});
    });


    // $(window).load(function() {
    //     $("#loader").delay(500).fadeOut(function () {
    //         //$('html').css({'-webkit-transform': 'translateZ(0)'});
    //     });
    //     $(".mask").delay(1000).fadeOut("slow");
    // });


    // var swiper = new Swiper('.swiper-container1', {
    //     pagination: '.swiper-pagination1',
    //     nextButton: '.swiper-button-next1',
    //     prevButton: '.swiper-button-prev1',
    //     // slidesPerView: 1,
    //     paginationClickable: true,
    //     autoplay: 7500,
    //     spaceBetween: 0,
    //     loop: true,
    //     effect: 'slide'
    // });

    // $('.leftMenu li:has(ul) > a').addClass('hasInner');
    $(".header__title h1").each(function () {
        var length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length;
        console.log(length);

        if (length > 50) {
            $(".header__title h1").css('font-size', 26 + 'px');
        }
        else if (length > 20) {
            $(".header__title h1").css('font-size', 30 + 'px');
        }
        else {
            $(".header__title h1").css('font-size', 36 + 'px');
        }
    });


    // $(window).on('load', function(){
    //     var titleH1 = $('.header__title h1');
    //     var titleH1text = $('.header__title h1').text();
    //     var titleH1length = titleH1text.length;
    //
    //     console.log(titleH1text);
    //     console.log(titleH1length);
    //
    //     if (titleH1length.innerHTML.length > 50) {
    //         titleH1.style.fontSize = '20px';
    //         console.log(20);
    //     }
    //     else if (titleH1.innerHTML.length > 10) {
    //         titleH1.style.fontSize = '50px';
    //         console.log(50);
    //     }
    //     else{
    //         console.log(100);
    //     }
    // });


    //прокрутка вверх
    $('.toTop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });
    $('.toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });


    $('.go_to1').click(function () {
        var scroll_el = $('.go_adr1');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
        }
        return false;
    });


    $(".phone1").mask("+7 (999) 999-9999");
    $(".phoneZ").mask("+7 (999) 999-9999");
    $(".phoneOrder").mask("+7 (999) 999-9999");

    $('table').wrap('<div class="table_outer"></div>');

    // $('.logo1').hover(
    //     function(){ $(this).addClass('animated swing') },
    //     function(){ $(this).removeClass('animated swing') }
    // );

    //Обрезка длинной строки
    function cutLongString(element, count_lit) {
        var text = element.html();
        var all_len = text.length;
        var new_text;
        if (all_len > count_lit) {
            new_text = text.substr(0, (count_lit - 3)) + '...';
            element.html(new_text);
        }
    }

    $(".cutLongString80").each(function () {
        if ($(this).length) {
            cutLongString($(this), 85);
        }
    });

    if ($('.swiper-container2').length) {
        var swiper2 = new Swiper('.swiper-container2', {
            // pagination: '.swiper-pagination2',
            nextButton: '.swiper-button-next2',
            prevButton: '.swiper-button-prev2',
            paginationClickable: true,
            spaceBetween: 40,
            loop: true,
            freeMode: true,
            // centeredSlides: true,
            autoplay: 6500,
            // effect: 'coverflow',
            autoplayDisableOnInteraction: false,
            slidesPerView: 6,
            breakpoints: {
                1080: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
                820: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                }
            }
        });
    }


    // отслеживание поведения адаптивного меню при изменении размера экрана
    // $(window).resize(function(){
    //     if ($('.header__area').width() > 600) {
    //         $('.topMenu__area').show();
    //         $('.topMenu__area').removeClass('topMenu__area_open');
    //     }
    //     else {
    //         $('.menuButton').removeClass('open');
    //         $('.topMenu__area').hide();
    //         $('.topMenu__area').removeClass('topMenu__area_open');
    //     }
    // });

    $('a[data-fancybox]').fancybox({
        closeBtn: false,
        arrows: true,
        keyboard: true,
        nextClick: true,
        infobar: true,
        protect: true,
        nextEffect: 'elastic',
        prevEffect: 'elastic',
        padding: 0,
        loop: true,
        animationEffect: "zoom-in-out",
        transitionEffect: "slide",
        touch: {
            vertical: true,  // Allow to drag content vertically
            momentum: true   // Continue movement after releasing mouse/touch when panning
        },
    });

///1/////////////С оверлеем//////////////

    $('.form1').on('click', '.submit1', function (e) {
        e.preventDefault();
        var name = $('.name1').val();
        var phone = $('.phone1').val();
        var email = $('.email1').val();
        var workemail = $('.work_email1').val();
        var message = $('.message1').val();
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (name == '') {
            swal({title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок"});
            $('.name1').addClass('error');
            setTimeout(function () {
                $('.name1').removeClass('error');
            }, 3000);
        }
        else if (phone == '') {
            swal({
                title: "Поле Телефон пустое",
                text: "Заполните поле телефон",
                type: "error",
                confirmButtonText: "ок"
            });
            $('.phone1').addClass('error');
            setTimeout(function () {
                $('.phone1').removeClass('error');
            }, 3000);
        }
        else if (email == '') {
            swal({title: "Ошибка Email", text: "Заполните поле Email", type: "error", confirmButtonText: "ок"});
            $('.email1').addClass('error');
            setTimeout(function () {
                $('.email1').removeClass('error');
            }, 3000);
        }
        else if (!r.test(email)) {
            swal({title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок"});
            $('.email1').addClass('error');
            setTimeout(function () {
                $('.email1').removeClass('error');
            }, 3000);
        }
        else if (message == '') {
            swal({
                title: "Пустое сообщение",
                text: "Заполните текст сообщения",
                type: "error",
                confirmButtonText: "ок"
            });
            $('.message1').addClass('error');
            setTimeout(function () {
                $('.message1').removeClass('error');
            }, 3000);
        }
        else if (workemail != '') {
            swal({title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок"});

        }
        else {
            $.post('mail.php', {
                name: name,
                phone: phone,
                email: email,
                message: message
            }, function () {
                swal({title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок"});
                $('.name1').val('').removeClass('error');
                $('.phone1').val('').removeClass('error');
                $('.email1').val('').removeClass('error');
                $('.message1').val('').removeClass('error');
            });
        }
    });


    $(".js_btnOrder").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var self = $(this);
        if (self.hasClass('js_active')) {
            self.removeClass('js_active');
            $('.js_containerOrder')
                .addClass('bounceOutUp')
                .removeClass('bounceInDown')
                .fadeOut(600)
            ;
            $('.overlay').fadeOut(200);
        }
        else {
            self.addClass('js_active');
            $('.js_containerOrder')
                .removeClass('bounceOutUp')
                .addClass('bounceInDown')
                .fadeIn(200)
            ;
            $('.overlay').fadeIn(200);

        }
    });
    $('.overlay').click(function (e) {
        e.preventDefault();
        $('.js_containerOrder')
            .addClass('bounceOutUp')
            .removeClass('bounceInDown')
            .fadeOut(600)
        ;
        $('.js_btnOrder').removeClass('js_active');
        $('.overlay').fadeOut(900);
    });
    $('.formClose').click(function (e) {
        e.preventDefault();
        $('.js_containerOrder')
            .addClass('bounceOutUp')
            .removeClass('bounceInDown')
            .fadeOut(600)
        ;
        $('.js_btnOrder').removeClass('js_active');
        $('.overlay').fadeOut(900);
    });

    $('.formOrder').on('click', '.submitOrder', function (e) {
        e.preventDefault();
        var subj = $('.subjOrder').val();
        var name = $('.nameOrder').val();
        var phone = $('.phoneOrder').val();
        var service = $('.service').val();
        // var email = $('.emailOrder').val();
        var workemail = $('.work_emailOrder').val();
        // var message = $('.messageOrder').val();
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (name == '') {
            swal({
                title: "Поле Имя пустое",
                text: "Укажите, как к Вам обращаться",
                type: "error",
                confirmButtonText: "ок"
            });
            $('.nameOrder').addClass('error');
            setTimeout(function () {
                $('.nameOrder').removeClass('error');
            }, 3000);
        }
        else if (phone == '') {
            swal({title: "Поле Телефон пустое", text: "Укажите Ваш телефон", type: "error", confirmButtonText: "ок"});
            $('.phoneOrder').addClass('error');
            setTimeout(function () {
                $('.phoneOrder').removeClass('error');
            }, 3000);
        }
        // else if (email == '') {
        //     swal({title: "Ошибка Email", text: "Укажите Ваш Email", type: "error", confirmButtonText: "ок"});
        //     $('.emailOrder').addClass('error');
        //     setTimeout(function () {
        //         $('.emailOrder').removeClass('error');
        //     }, 3000);
        // }
        // else if (!r.test(email)) {
        //     swal({title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок"});
        //     $('.emailOrder').addClass('error');
        //     setTimeout(function () {
        //         $('.emailOrder').removeClass('error');
        //     }, 3000);
        // }
        // else if (message == '') {
        //     swal({
        //         title: "Пустое сообщение",
        //         text: "Укажите, что Вы хотите заказать",
        //         type: "error",
        //         confirmButtonText: "ок"
        //     });
        //     $('.messageOrder').addClass('error');
        //     setTimeout(function () {
        //         $('.messageOrder').removeClass('error');
        //     }, 3000);
        // }
        else if (workemail != '') {
            swal({title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок"});
        }
        else {
            $.post('mail.php', {
                subj: subj,
                name: name,
                phone: phone,
                // email: email,
                message: service
            }, function () {
                swal({
                    title: "Спасибо",
                    text: "Предварительный заказ отправлен, наш менеджер свяжется в Вами",
                    type: "success",
                    confirmButtonText: "ок"
                });
                $('.nameOrder').val('').removeClass('error');
                $('.phoneOrder').val('').removeClass('error');
                // $('.emailOrder').val('').removeClass('error');
                // $('.messageOrder').val('').removeClass('error');
                $('.js_containerOrder')
                    .addClass('bounceOutUp')
                    .removeClass('bounceInDown')
                    .fadeOut(600)
                ;
                $('.js_btnOrder').removeClass('js_active');
                $('.overlay').fadeOut(900);

            });
        }
    });


    $("#instafeed").length ? (a = new Instafeed({
        get: "user",
        userId: 1267174561,
        clientId: "6b3bdaed5cad4d07b0f043ebca26672d",
        accessToken: "1267174561.6b3bdae.1b7f4159331e45bf9ec956a450a172a2",
        limit: 12,
        resolution: "low_resolution",
        template: '<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igtrbg.png" alt="{{caption}}"/></a></div>'
    }), a.run()) : void 0;


});


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if ($(".map__area").length) {
    ymaps.ready(init);

    function init() {

        var myMap = new ymaps.Map("map", {
            center: [51.53636907237114,46.022191999999926],
            zoom: 16,
            controls: ['zoomControl']
        });

        myMap.behaviors.disable('scrollZoom');
        if (isMobile.any()) {
            myMap.behaviors.disable('drag');
        }


        var myGeoObjects = [];

        myGeoObjects[0] = new ymaps.Placemark([51.53636907237114,46.022191999999926], {
            clusterCaption: 'SPA LOUNGE',
            hintContent: 'Салон красоты SPA LOUNGE',
            balloonContentBody: 'ул. Московская д.115/117, ТК «»Мир», 5 этаж, т. 8(8452)26-00-00, 77-44-14'
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/marker.png',
            // Размеры метки.
            iconImageSize: [30, 48],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-15, -48]
        });

        // myGeoObjects[1] = new ymaps.Placemark([51.551021850477284,46.01745698280331],{
        //     clusterCaption: 'Саратовремеонт',
        //     hintContent: 'Саратовремонт!',
        //     balloonContentBody: 'Саратовремонт, Саратов, Танкистов ул., 37'
        // },{
        //     iconLayout: 'default#image',
        //     iconImageHref: 'assets/img/marker.png',
        //     iconImageSize: [30, 48],
        //     iconImageOffset: [-15, -48]
        // });

        var clusterIcons = [{
            href: '/images/pointer.png',
            size: [31, 40],
            offset: [0, 0]
        }];

        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
            // Устанавливаем стандартный макет балуна кластера "Карусель".
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            // Устанавливаем собственный макет.
            //clusterBalloonItemContentLayout: customItemContentLayout,
            // Устанавливаем режим открытия балуна.
            // В данном примере балун никогда не будет открываться в режиме панели.
            clusterBalloonPanelMaxMapArea: 0,
            // Устанавливаем размеры макета контента балуна (в пикселях).
            clusterBalloonContentLayoutWidth: 300,
            clusterBalloonContentLayoutHeight: 200,
            // Устанавливаем максимальное количество элементов в нижней панели на одной странице
            clusterBalloonPagerSize: 5,
            // Настройка внешего вида нижней панели.
            // Режим marker рекомендуется использовать с небольшим количеством элементов.
            clusterBalloonPagerType: 'marker',
            // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
            // clusterBalloonCycling: false,
            // Можно отключить отображение меню навигации.
            // clusterBalloonPagerVisible: false
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
    }

}


//################ likeBlock

var share_url = 'https://radiodetali64.ru/';
var share_title = 'Радиотовары и радиодетали в Саратове';
var share_desc = 'Главная';
var share_image = '';
var share_text = 'Главная';
var share_popup_width = 650;
var share_popup_height = 450;

// var share_links_container = document.getElementById('my_share');


var share_links_container = $('.likeBlock');

if (share_links_container != 'NULL') {

    if (typeof(share_popup_width) != 'number' || typeof(share_popup_height) != 'number') {
        share_popup_width = 626;
        share_popup_height = 436;
    }

    share = {
        twitter: function (purl, ptitle) {
            url = 'http://twitter.com/share?';
            url += 'text=' + encodeURIComponent(ptitle);
            url += '&url=' + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            share.popup(url);
            return false;
        },
        gp: function (purl, ptitle, pimg, text) {
            url = 'https://plus.google.com/share?';
            url += 'url=' + encodeURIComponent(purl);
            share.popup(url);
            return false;
        },
        mail: function (purl, ptitle, pimg, text) {
            url = 'http://connect.mail.ru/share?';
            url += 'url=' + encodeURIComponent(purl);
            url += '&title=' + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&imageurl=' + encodeURIComponent(pimg);
            share.popup(url);
            return false;
        },
        vk: function (purl, ptitle, pimg, text) {
            url = 'http://vkontakte.ru/share.php?';
            url += 'url=' + encodeURIComponent(purl);
            url += '&title=' + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&image=' + encodeURIComponent(pimg);
            url += '&noparse=true';
            share.popup(url);
            return false;
        },
        ok: function (purl, text) {
            url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
            url += '&st.comments=' + encodeURIComponent(text);
            url += '&st._surl=' + encodeURIComponent(purl);
            share.popup(url);
            return false;
        },
        fb: function (purl, ptitle, pimg, text) {
            url = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]=' + encodeURIComponent(ptitle);
            url += '&p[summary]=' + encodeURIComponent(text);
            url += '&p[url]=' + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            share.popup(url);
            return false;
        },


        popup: function (url, width, height) {
            window.open(url, '', 'toolbar=0,status=0,width=' + share_popup_width + ',height=' + share_popup_height);
            return false;
        }
    };
}



