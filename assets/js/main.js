$(function() {
  $(".menuButton").click(function() {
    $(this).toggleClass("open");
    $(".adaptiveMenu__area").slideToggle();
  });

  $(".adaptiveMenuBtnClose").click(function() {
    $(".menuButton").toggleClass("open");
    $(".adaptiveMenu__area").slideToggle();
  });

  $(".vMenu li:has(ul) > a")
    .addClass("hasInner")
    .append('<div class="goInner"><i class="icon-next"></i></div>');

  $(".vMenu__toggleBtn").click(function() {
    $(this).toggleClass("open");
    $(".adaptivevMenu__area").slideToggle();
  });

  $(".adaptivevMenuBtnClose").click(function() {
    $(".vMenu__toggleBtn").toggleClass("open");
    $(".adaptivevMenu__area").slideToggle();
  });

  $("table").wrap('<div class="table_outer"></div>');

  $(".toTop").hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });

  $(".phoneZ1").mask("+7 (999) 999-9999");
  $(".phone1").mask("+7 (999) 999-9999");

  $(".minus").click(function() {
    var $input = $(this)
      .parent()
      .find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function() {
    var $input = $(this)
      .parent()
      .find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  if ($(".swiper-container1").length) {
    var mySwiper1 = new Swiper(".swiper-container1", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination1",
        type: "bullets",
        dynamicBullets: true,
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1"
      },
      on: {
        init: function() {
          console.log("swiper initialized");
          $(".swiper-slide")
            .children(".swiper__cadr")
            .removeClass("animationBaretsky1")
            .fadeOut(500);

          setTimeout(function() {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationBaretsky1");
          }, 500);
        },
        slideChange: function() {
          $(".swiper-slide")
            .children(".swiper__cadr")
            .removeClass("animationBaretsky1")
            .fadeOut(500);

          setTimeout(function() {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationBaretsky1");
          }, 500);
        }
      }
    });
  }

  if ($(".tovar__slider").length) {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 5,
      loop: false,
      //   effect: 'slide',
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper(".gallery-top", {
      //   nextButton: '.swiper-button-next2',
      //   prevButton: '.swiper-button-prev2',
      spaceBetween: 5,
      loop: false,
      effect: "slide",
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2"
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    // if($(".gallery-top .swiper-slide2").length == 1) {
    //   $('.swiper-pagination').addClass( "disabled" );
    // }
  }

  $(".tovarItem__addCart").on("click", function(e) {
    e.preventDefault(); //при верстке ставить - в modx убирать, а то корзина не суммируется
    var cart = $(".myMiniCart__area ");
    var imgtodrag = $(this)
      .closest(".tovarItem")
      .children(".tovarItem__header")
      .children(".tovarItem__img")
      .find("img");

    if (imgtodrag) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          opacity: "0.5",
          position: "absolute",
          height: "150px",
          width: "150px",
          "z-index": "9999"
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75
          },
          1000
        );

      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function() {
          $(this).detach();
        }
      );
    }
  });

  $(".tovar__addToCart").on("click", function(e) {
    e.preventDefault(); //при верстке ставить - в modx убирать, а то корзина не суммируется
    var cart = $(".myMiniCart__area ");
    var imgtodrag = $(this)
      .closest(".tovar__areaTop")
      .find(".swiper-slide-active img");

    if (imgtodrag) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          opacity: "0.5",
          position: "absolute",
          height: "150px",
          width: "150px",
          "z-index": "9999"
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75
          },
          1000
        );

      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function() {
          $(this).detach();
        }
      );
    }
  });

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    }
  });

  $(".form1").on("click", ".submit1", function(e) {
    e.preventDefault();
    var name = $(".name1").val();
    var phone = $(".phone1").val();
    var email = $(".email1").val();
    var workemail = $(".work_email1").val();
    var message = $(".message1").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    var recaptcha = grecaptcha.getResponse("recaptcha1");
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".name1").addClass("error");
      setTimeout(function() {
        $(".name1").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".phone1").addClass("error");
      setTimeout(function() {
        $(".phone1").removeClass("error");
      }, 3000);
    } else if (email == "") {
      swal({
        title: "Ошибка Email",
        text: "Заполните поле Email",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".email1").addClass("error");
      setTimeout(function() {
        $(".email1").removeClass("error");
      }, 3000);
    } else if (!r.test(email)) {
      swal({
        title: "Ошибка",
        text: "Корректно заполните поле e-mail",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".email1").addClass("error");
      setTimeout(function() {
        $(".email1").removeClass("error");
      }, 3000);
    } else if (message == "") {
      swal({
        title: "Пустое сообщение",
        text: "Заполните текст сообщения",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".message1").addClass("error");
      setTimeout(function() {
        $(".message1").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок"
      });
    } else if (!recaptcha) {
      swal({
        title: "поставьте галочку",
        text: "при проверке на спам",
        type: "error",
        confirmButtonText: "ок"
      });
    } else {
      $.post(
        "mail.php",
        {
          name: name,
          phone: phone,
          email: email,
          message: message,
          recaptcha: recaptcha
        },
        function() {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок"
          });
          $(".name1")
            .val("")
            .removeClass("error");
          $(".phone1")
            .val("")
            .removeClass("error");
          $(".email1")
            .val("")
            .removeClass("error");
          $(".message1")
            .val("")
            .removeClass("error");
        }
      );
    }
  });

  $(".ringBtn_js").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var self = $(this);
    if (self.hasClass("js_active")) {
      self.removeClass("js_active");
      $(".js_containerZ1")
        .addClass("bounceOutUp")
        .removeClass("bounceInDown")
        .fadeOut(600);
      $(".overlay").fadeOut(200);
    } else {
      self.addClass("js_active");
      $(".js_containerZ1")
        .removeClass("bounceOutUp")
        .addClass("bounceInDown")
        .fadeIn(200);
      $(".overlay").fadeIn(200);
    }
  });
  $(".overlay").click(function(e) {
    e.preventDefault();
    $(".js_containerZ1")
      .addClass("bounceOutUp")
      .removeClass("bounceInDown")
      .fadeOut(600);
    $(".ringBtn_js").removeClass("js_active");

    $(".overlay").fadeOut(600);
  });
  $(".formClose").click(function(e) {
    e.preventDefault();
    $(".js_containerZ1")
      .addClass("bounceOutUp")
      .removeClass("bounceInDown")
      .fadeOut(600);
    $(".ringBtn_js").removeClass("js_active");
    $(".overlay").fadeOut(600);
  });
  $(".formZ1").on("click", ".submitZ1", function(e) {
    e.preventDefault();
    var name = $(".nameZ1").val();
    var phone = $(".phoneZ1").val();
    var workemail = $(".work_emailZ1").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (name == "") {
      swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" });
      $(".nameZ1").addClass("error");
      setTimeout(function() {
        $(".nameZ1").removeClass("error");
      }, 3000);
    } else if (phone == "") {
      swal({
        title: "Поле Телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок"
      });
      $(".phoneZ1").addClass("error");
      setTimeout(function() {
        $(".phoneZ1").removeClass("error");
      }, 3000);
    } else if (workemail != "") {
      swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" });
    } else {
      $.post(
        "mail.php",
        {
          subj: "Заказ с главной страницы",
          name: name,
          phone: phone
        },
        function() {
          swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" });
          $(".nameZ1")
            .val("")
            .removeClass("error");
          $(".phoneZ1")
            .val("")
            .removeClass("error");
          $(".jsbtn__Z1").removeClass("js_active");
          $(".js_containerZ1")
            .addClass("bounceOutUp")
            .removeClass("bounceInDown")
            .fadeOut(600);
          $(".overlay").fadeOut(200);
        }
      );
    }
  });
});

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if ($(".map__area").length) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [51.47580915016555, 46.15893440825965],
      zoom: 16,
      controls: ["zoomControl"]
    });

    myMap.behaviors.disable("scrollZoom");
    if (isMobile.any()) {
      myMap.behaviors.disable("drag");
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [51.47580915016555, 46.15893440825965],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader:
          '<div class="baloon__top">Магазин стройматериалов<br>в Энгельсе</div>' +
          '<div class="baloon__description">Доставка по звонку!</div>',
        // Зададим содержимое основной части балуна.
        balloonContentBody:
          '<div class="baloon__content"><img src="assets/img/logo-map.png" height="52" width="150">' +
          '<a href="tel:+79053879990">8(905)387-99-90</a> <a href="tel:+79376397000">8(937)639-70-00</a>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '<div class="baloon__footer">город Энгельс, ул. М.Расковой, д.6В</div>',
        clusterCaption: "Доставка стройматериалов",
        // Зададим содержимое всплывающей подсказки.
        hintContent: '<div class="baloon__top">Магазин стройматериалов в Энгельсе</div>'
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        iconImageHref: "assets/img/marker.png",
        // Размеры метки.
        iconImageSize: [31, 50],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-15, -50]
      }
    );
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

    var clusterIcons = [
      {
        href: "/images/pointer.png",
        size: [31, 40],
        offset: [0, 0]
      }
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      // Устанавливаем стандартный макет балуна кластера "Карусель".
      clusterBalloonContentLayout: "cluster#balloonCarousel",
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
      clusterBalloonPagerType: "marker"
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

var share_url = "https://site-a.ru/";
var share_title = 'Веб-студия "Сайт-А" - создание и продвижение сайтов, настройка рекламы в ВК';
var share_desc = "Главная";
var share_image = "";
var share_text = "Главная";
var share_popup_width = 650;
var share_popup_height = 450;

// var share_links_container = document.getElementById('my_share');

var share_links_container = $(".likeBlock");

if (share_links_container != "NULL") {
  if (typeof share_popup_width != "number" || typeof share_popup_height != "number") {
    share_popup_width = 626;
    share_popup_height = 436;
  }

  share = {
    twitter: function(purl, ptitle) {
      url = "http://twitter.com/share?";
      url += "text=" + encodeURIComponent(ptitle);
      url += "&url=" + encodeURIComponent(purl);
      url += "&counturl=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    gp: function(purl, ptitle, pimg, text) {
      url = "https://plus.google.com/share?";
      url += "url=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    mail: function(purl, ptitle, pimg, text) {
      url = "http://connect.mail.ru/share?";
      url += "url=" + encodeURIComponent(purl);
      url += "&title=" + encodeURIComponent(ptitle);
      url += "&description=" + encodeURIComponent(text);
      url += "&imageurl=" + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },
    vk: function(purl, ptitle, pimg, text) {
      url = "http://vkontakte.ru/share.php?";
      url += "url=" + encodeURIComponent(purl);
      url += "&title=" + encodeURIComponent(ptitle);
      url += "&description=" + encodeURIComponent(text);
      url += "&image=" + encodeURIComponent(pimg);
      url += "&noparse=true";
      share.popup(url);
      return false;
    },
    ok: function(purl, text) {
      url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
      url += "&st.comments=" + encodeURIComponent(text);
      url += "&st._surl=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    fb: function(purl, ptitle, pimg, text) {
      url = "http://www.facebook.com/sharer.php?s=100";
      url += "&p[title]=" + encodeURIComponent(ptitle);
      url += "&p[summary]=" + encodeURIComponent(text);
      url += "&p[url]=" + encodeURIComponent(purl);
      url += "&p[images][0]=" + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },

    popup: function(url, width, height) {
      window.open(url, "", "toolbar=0,status=0,width=" + share_popup_width + ",height=" + share_popup_height);
      return false;
    }
  };
}
