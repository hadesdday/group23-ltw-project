/*--------------------------------------------------
Template Name: limupa;
Description: limupa - Digital Products Store ECommerce Bootstrap 4 Template;
Template URI:;
Author Name:HasTech;
Author URI:;
Version: 1;
Note: main.js, All Default Scripting Languages For This Theme Included In This File.
-----------------------------------------------------
		CSS INDEX
		================
		01. Li's Meanmenu
		02. Header Dropdown
		03. Li's Sticky Menu Activation
		04. Nice Select
		05. Main Slider Activision
		06. Li's Product Activision
		07. Li's Product Activision
		08. Countdown
		09. Tooltip Active
		10. Scroll Up
		11. Category Menu
		12. Li's Product Activision
		13. FAQ Accordion
		14. Toggle Function Active
		15. Li's Blog Gallery Slider
		16. Counter Js
		17. Price slider
		18. Category menu Activation
		19. Featured Product active
		20. Featured Product 2 active
		21. Modal Menu Active
		22. Cart Plus Minus Button
		23. Single Prduct Carousel Activision
		24. Star Rating Js
		25. Zoom Product Venobox
		26. WOW

-----------------------------------------------------------------------------------*/
(function ($) {
  "use Strict";
  /*----------------------------------------*/
  /* 	01. Li's Meanmenu
/*----------------------------------------*/
  jQuery(".hb-menu nav").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });
  /*----------------------------------------*/
  /*  02. Header Dropdown
 /*----------------------------------------*/
  // Li's Dropdown Menu
  $(
    ".ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu"
  ).on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $(this)
      .siblings(
        ".ht-setting, .ht-currency, .ht-language, .minicart, .cw-sub-menu li"
      )
      .slideToggle();
  });
  $(".ht-setting-trigger.is-active").siblings(".catmenu-body").slideDown();
  /*----------------------------------------*/
  /* 03. Li's Sticky Menu Activation
/*----------------------------------------*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".header-sticky").addClass("sticky");
    } else {
      $(".header-sticky").removeClass("sticky");
    }
  });
  /*----------------------------------------*/
  /*  04. Nice Select
/*----------------------------------------*/
  $(document).ready(function () {
    $(".nice-select").niceSelect();
  });
  /*----------------------------------------*/
  /* 05. Main Slider Activision
/*----------------------------------------*/
  $(".slider-active").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    items: 1,
    autoplayTimeout: 10000,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: true,
    autoHeight: true,
    lazyLoad: true,
  });
  /*----------------------------------------*/
  /* 06. Li's Product Activision
/*----------------------------------------*/
  $(".product-active").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    item: 5,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  /*----------------------------------------*/
  /* 07. Li's Product Activision
/*----------------------------------------*/
  $(".special-product-active").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    item: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  /*----------------------------------------*/
  /* 08. Countdown
/*----------------------------------------*/
  $(".li-countdown").countdown("2019/12/01", function (event) {
    $(this).html(
      event.strftime(
        '<div class="count">%D <span>Days:</span></div> <div class="count">%H <span>Hours:</span></div> <div class="count">%M <span>Mins:</span></div><div class="count"> %S <span>Secs</span></div>'
      )
    );
  });
  /*----------------------------------------*/
  /* 09. Tooltip Active
/*----------------------------------------*/
  $(".product-action a, .social-link a").tooltip({
    animated: "fade",
    placement: "top",
    container: "body",
  });
  /*----------------------------------------*/
  /* 10. Scroll Up
/*----------------------------------------*/
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: "linear",
    scrollSpeed: 500,
  });
  /*----------------------------------------*/
  /* 11. Category Menu
/*----------------------------------------*/
  $(".rx-parent").on("click", function () {
    $(".rx-child").slideToggle();
    $(this).toggleClass("rx-change");
  });
  //    category heading
  $(".category-heading").on("click", function () {
    $(".category-menu-list").slideToggle(300);
  });
  /*-- Category Menu Toggles --*/
  function categorySubMenuToggle() {
    var screenSize = $(window).width();
    if (screenSize <= 991) {
      $("#cate-toggle .right-menu > a").prepend(
        '<i class="expand menu-expand"></i>'
      );
      $(".category-menu .right-menu ul").slideUp();
      //        $('.category-menu .menu-item-has-children i').on('click', function(e){
      //            e.preventDefault();
      //            $(this).toggleClass('expand');
      //            $(this).siblings('ul').css('transition', 'none').slideToggle();
      //        })
    } else {
      $(".category-menu .right-menu > a i").remove();
      $(".category-menu .right-menu ul").slideDown();
    }
  }
  categorySubMenuToggle();
  $(window).resize(categorySubMenuToggle);

  /*-- Category Sub Menu --*/
  function categoryMenuHide() {
    var screenSize = $(window).width();
    if (screenSize <= 991) {
      $(".category-menu-list").hide();
    } else {
      $(".category-menu-list").show();
    }
  }
  categoryMenuHide();
  $(window).resize(categoryMenuHide);
  $(".category-menu-hidden").find(".category-menu-list").hide();
  $(".category-menu-list").on("click", "li a, li a .menu-expand", function (e) {
    var $a = $(this).hasClass("menu-expand") ? $(this).parent() : $(this);
    if ($a.parent().hasClass("right-menu")) {
      if ($a.attr("href") === "#" || $(this).hasClass("menu-expand")) {
        if ($a.siblings("ul:visible").length > 0) $a.siblings("ul").slideUp();
        else {
          $(this).parents("li").siblings("li").find("ul:visible").slideUp();
          $a.siblings("ul").slideDown();
        }
      }
    }
    if ($(this).hasClass("menu-expand") || $a.attr("href") === "#") {
      e.preventDefault();
      return false;
    }
  });
  /*----------------------------------------*/
  /* 12. Li's Product Activision
/*----------------------------------------*/
  $(".li-featured-product-active").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    item: 2,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  /*----------------------------------------*/
  /* 13. FAQ Accordion
/*----------------------------------------*/
  $(".card-header a").on("click", function () {
    $(".card").removeClass("actives");
    $(this).parents(".card").addClass("actives");
  });
  /*----------------------------------------*/
  /* 14. Toggle Function Active
/*----------------------------------------*/
  // showlogin toggle
  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(900);
  });
  // showlogin toggle
  $("#showcoupon").on("click", function () {
    $("#checkout_coupon").slideToggle(900);
  });
  // showlogin toggle
  $("#cbox").on("click", function () {
    $("#cbox-info").slideToggle(900);
  });

  // showlogin toggle
  $("#ship-box").on("click", function () {
    $("#ship-box-info").slideToggle(1000);
  });
  /*----------------------------------------*/
  /* 15. Li's Blog Gallery Slider
/*----------------------------------------*/
  var gallery = $(".li-blog-gallery-slider");
  gallery.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  /*----------------------------------------*/
  /* 16. Counter Js
/*----------------------------------------*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  /*----------------------------------------*/
  /* 17. Price slider
/*----------------------------------------*/
  var sliderrange = $("#slider-range");
  var amountprice = $("#amount");
  $(function () {
    sliderrange.slider({
      range: true,
      min: 0,
      max: 1200,
      values: [300, 800],
      slide: function (event, ui) {
        amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    amountprice.val(
      "$" +
        sliderrange.slider("values", 0) +
        " - $" +
        sliderrange.slider("values", 1)
    );
  });
  /*----------------------------------------*/
  /* 18. Category menu Activation
 /*----------------------------------------*/
  $(".category-sub-menu li.has-sub > a").on("click", function () {
    $(this).removeAttr("href");
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp();
    } else {
      element.addClass("open");
      element.children("ul").slideDown();
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });
  /*----------------------------------------*/
  /* 19. Featured Product active
 /*----------------------------------------*/
  $(".featured-product-active").owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="ion-ios-arrow-back"></i>',
      '<i class="ion-ios-arrow-forward"></i>',
    ],
    item: 3,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1100: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  /*----------------------------------------*/
  /* 20. Featured Product 2 active
/*----------------------------------------*/
  $(".featured-product-active-2").owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="ion-ios-arrow-back"></i>',
      '<i class="ion-ios-arrow-forward"></i>',
    ],
    item: 3,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 1,
      },
      1100: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  /*----------------------------------------*/
  /* 21. Modal Menu Active
 /*----------------------------------------*/
  $(".product-details-images").each(function () {
    var $this = $(this);
    var $thumb = $this.siblings(".product-details-thumbs, .tab-style-left");
    $this.slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      centerMode: false,
      centerPadding: 0,
      asNavFor: $thumb,
    });
  });
  $(".product-details-thumbs").each(function () {
    var $this = $(this);
    var $details = $this.siblings(".product-details-images");
    $this.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: 0,
      prevArrow:
        '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
      asNavFor: $details,
    });
  });
  $(".tab-style-left, .tab-style-right").each(function () {
    var $this = $(this);
    var $details = $this.siblings(".product-details-images");
    $this.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      vertical: true,
      centerPadding: 0,
      prevArrow:
        '<span class="slick-prev"><i class="fa fa-angle-down"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="fa fa-angle-up"></i></span>',
      asNavFor: $details,
    });
  });
  /*----------------------------------------*/
  /* 22. Cart Plus Minus Button
/*----------------------------------------*/
  $(".cart-plus-minus").append(
    '<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>'
  );
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });
  /*----------------------------------------*/
  /* 23. Single Prduct Carousel Activision
/*----------------------------------------*/
  $(".sp-carousel-active").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    item: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  /*----------------------------------------*/
  /* 24. Star Rating Js
/*----------------------------------------*/
  $(function () {
    $(".star-rating").barrating({
      theme: "fontawesome-stars",
    });
  });
  /*----------------------------------------*/
  /* 25. Zoom Product Venobox
/*----------------------------------------*/
  $(".venobox").venobox({
    spinner: "wave",
    spinColor: "#cb9a00",
  });
  /*----------------------------------------*/
  /* 26. WOW
/*----------------------------------------*/
  new WOW().init();

  //login validate
  $(() => {
    var usernameValid = false;
    var passwordValid = false;

    $("#password").on("input", () => {
      var password = $("#password").val();
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

      if (password.length < 1 || !passwordRegex.test(password)) {
        passwordValid = false;
        $("#password").addClass("error");
        $(".error__label").eq(1).addClass("show");
      } else {
        passwordValid = true;
        $("#password").removeClass("error");
        $(".error__label").eq(1).removeClass("show");
      }
      if (usernameValid && passwordValid) {
        $(".login-button").removeAttr("disabled");
      } else {
        $(".login-button").attr("disabled", "disabled");
      }
    });

    $("#username").on("input", () => {
      var username = $("#username").val();
      const usernameRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (username.length < 1 || !usernameRegex.test(username)) {
        usernameValid = false;
        $("#username").addClass("error");
        $(".error__label").eq(0).addClass("show");
      } else {
        usernameValid = true;
        $("#username").removeClass("error");
        $(".error__label").eq(0).removeClass("show");
      }

      if (usernameValid && passwordValid) {
        $(".login-button").removeAttr("disabled");
      } else {
        $(".login-button").attr("disabled", "disabled");
      }
    });
  });

  function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }

  //register validate
  $(() => {
    var fullnameValid = false;
    var emailRegValid = false;
    var registerPasswordValid = false;
    var confirmPasswordValid = false;

    $("#fullname").on("input", () => {
      var fullname = $("#fullname").val().replaceAll(" ", "");

      var fNameRegex = /^[a-zA-Z ]{2,}$/g;

      if (fullname.length < 1 || !fNameRegex.test(removeAscent(fullname))) {
        fullnameValid = false;
        $("#fullname").addClass("error");
        $(".error__label").first().addClass("show");
      } else {
        fullnameValid = true;
        $("#fullname").removeClass("error");
        $(".error__label").first().removeClass("show");
      }
      if (
        fullnameValid &&
        emailRegValid &&
        registerPasswordValid &&
        confirmPasswordValid
      ) {
        $(".register-button").removeAttr("disabled");
      } else {
        $(".register-button").attr("disabled", "disabled");
      }
    });

    $("#email__reg").on("input", () => {
      var emailReg = $("#email__reg").val();
      const emailRegRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (emailReg.length < 1 || !emailRegRegex.test(emailReg)) {
        emailRegValid = false;
        $("#email__reg").addClass("error");
        $(".error__label").eq(1).addClass("show");
      } else {
        emailRegValid = true;
        $("#email__reg").removeClass("error");
        $(".error__label").eq(1).removeClass("show");
      }
      if (
        fullnameValid &&
        emailRegValid &&
        registerPasswordValid &&
        confirmPasswordValid
      ) {
        $(".register-button").removeAttr("disabled");
      } else {
        $(".register-button").attr("disabled", "disabled");
      }
    });

    $("#password__reg").on("input", () => {
      var password = $("#password__reg").val();
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

      if (password.length < 1 || !passwordRegex.test(password)) {
        registerPasswordValid = false;
        $("#password__reg").addClass("error");
        $(".error__label").eq(2).addClass("show");
      } else {
        registerPasswordValid = true;
        $("#password__reg").removeClass("error");
        $(".error__label").eq(2).removeClass("show");
      }
      if (
        fullnameValid &&
        emailRegValid &&
        registerPasswordValid &&
        confirmPasswordValid
      ) {
        $(".register-button").removeAttr("disabled");
      } else {
        $(".register-button").attr("disabled", "disabled");
      }
    });

    $("#confirm__password").on("input", () => {
      var password = $("#password__reg").val();
      var confirmPassword = $("#confirm__password").val();

      if (password !== confirmPassword) {
        confirmPasswordValid = false;
        $("#confirm__password").addClass("error");
        $(".error__label").last().addClass("show");
      } else {
        confirmPasswordValid = true;
        $("#confirm__password").removeClass("error");
        $(".error__label").last().removeClass("show");
      }

      if (
        fullnameValid &&
        emailRegValid &&
        registerPasswordValid &&
        confirmPasswordValid
      ) {
        $(".register-button").removeAttr("disabled");
      } else {
        $(".register-button").attr("disabled", "disabled");
      }
    });
  });

  //forgot-password validate
  $(() => {
    var emailValid = false;
    $("#email__account").on("input", () => {
      var email = $("#email__account").val();
      const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (email.length < 1 || !emailRegex.test(email)) {
        emailValid = false;
        $("#email__account").addClass("error");
        $(".error__label").first().addClass("show");
      } else {
        emailValid = true;
        $("#email__account").removeClass("error");
        $(".error__label").first().removeClass("show");
      }

      if (emailValid) {
        $(".verify-button").removeAttr("disabled");
      } else {
        $(".verify-button").attr("disabled", "disabled");
      }
    });
  });
})(jQuery);
