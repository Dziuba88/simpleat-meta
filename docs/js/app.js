  $.get("img/sprite.svg", function(data) {
    var div = document.createElement("div");
    div.hidden = true;
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    document.body.insertBefore(div, document.body.childNodes[0]);
  });

  function createSticky(sticky) {
    if (typeof sticky !== "undefined") {
      $(window).scrollTop() >= 100 ? sticky.addClass("sticky") : sticky.removeClass("sticky");
      $(window).on("scroll", function() {
        $(this).scrollTop() >= 100 ? sticky.addClass("sticky") : sticky.removeClass("sticky");
      });
    }
  };

  $(document).ready(function() {
    createSticky($(".navbar"));

    $('select').niceSelect();

    $('[data-show="popover"]').popover({
      html : true,
      placement: "top",
      trigger: "hover",
      delay: { show: 100, hide: 1000 },
      template: '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'
    });

    $('.alert__btn').click(function () {
      $(this).parents('.alert').fadeOut(500);
    })

    $('.modal--video').magnificPopup({
      //disableOn: 700,
      type: 'iframe',
      removalDelay: 160,
      preloader: false,
      showCloseBtn: true,
    });

    $('.modal--inline, .modal--edit').magnificPopup({
      type: 'inline',
      showCloseBtn: true,
      fixedContentPos: true,
      /*callbacks: {
        beforeOpen: function() {
          $('html, body').css('overflow', 'hidden');
        },
        beforeClose: function() {
          $('html, body').css('overflow', '');
        }
      }*/
    });

    $('.se__join button').click(function (e) {
      var email = $('input[name=join_email]').val();
      if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
        $('input[name=join_email]').addClass('error');
        return false;
      }
    });

    $('input[name=join_email]').focus(function () {
      $(this).removeClass('error')
    })

    $('[data-toggle=multilanguage]').click(function (e) {
      e.stopPropogination;
      $(this).parents('.contacts').removeClass('multilanguage');
    })

    $('.navbar--mobile').hide();
    $('.navbar--show').click(function () {
      $('.navbar--mobile').fadeIn(300, function () {
        $(this).css('display', 'flex');
        $('html').css('overflow', 'hidden');
      });
    });

    $('.navbar--close').click(function () {
      $('.navbar--mobile').fadeOut(300, function () {
        $(this).css('display', 'none');
        $('html').css('overflow', '');
      });
    });

    $('.se__contact--form button').click(function (e) {
      var name = $('input[name=contact__name]').val();
      var email = $('input[name=contact__email]').val();
      var message = $('textarea[name=contact__message]').val();

      if (name.length < 3) {
        $('input[name=contact__name]').addClass('error');
      };
      if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
        $('input[name=contact__email]').addClass('error');
        //return false;
      } 
      if (message.length < 1) {
        $('textarea[name=contact__message]').addClass('error');
        //return false;
      }
    });

    $('.se__contact--form input, .se__contact--form textarea').focus(function () {
      $(this).removeClass('error')
    });

    $('#signin button').click(function () {
      var email = $('input[name=signin__email]').val();
      var password = $('input[name=signin__password]').val();
      if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
        $('input[name=signin__email]').addClass('error');
      }
      if (password.length < 6) {
        $('input[name=signin__password]').addClass('error');
      }
    });

    $('#signin input').focus(function () {
      $(this).removeClass('error')
    });

    $('#signup button').click(function () {
      var email = $('input[name=signup__email]').val();
      var password = $('input[name=signup__password]').val();
      var confirm = $('input[name=signup__confirm]').val();
      if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
        $('input[name=signup__email]').addClass('error');
      }
      if (password.length < 6) {
        $('input[name=signup__password]').addClass('error');
      }
      if (password != confirm || confirm == '') {
        $('input[name=signup__confirm]').addClass('error');
      }
    });
    
    $('[data-masked=cupon]').inputmask('*** *** *** ***');

    $('.se__card--auth button').click(function () {
      var email = $('input[name=auth__email]').val();
      var password = $('input[name=auth__password]').val();
      if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
        $('input[name=auth__email]').addClass('error');
      }
      if (password.length < 6) {
        $('input[name=auth__password]').addClass('error');
      }
    });

    $('.se__card--auth input').focus(function () {
      $(this).removeClass('error')
    });

    $('.se__card--checkout button').click(function () {
      $('.se__card--checkout input[required]').each(function () {
        if ($(this).val() == '') {
          $(this).parent('.checkout__row--input').addClass('error')
        }
      });
      $('.se__card--checkout input[type=email]').each(function () {
        var email = $('.se__card--checkout input[type=email]').val();
        if(!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/)) {
          $(this).parent('.checkout__row--input').addClass('error')
        }
      });
      $('.se__card--checkout select').each(function () {
        if ($(this).find('option:selected').val() == 0) {
          $(this).parent('.checkout__row--input').addClass('error')
        }
      });
    });

    $('.se__card--checkout input[required]').focus(function () {
      $(this).parent('.checkout__row--input').removeClass('error')
    });
    $('.se__card--checkout input[required]').blur(function () {
      if ($(this).val() == '') {
        $(this).parent('.checkout__row--input').addClass('error')
      }
    });
    $('.se__card--checkout select').change(function () {
      if ($(this).find('option:selected').val() == 0) {
        $(this).parent('.checkout__row--input').addClass('error')
      }
    });
    $('.nice-select').click(function () {
      $(this).parent('.checkout__row--input').removeClass('error')
    });

    $('.form__information button').click(function () {
      $('.form__information input[required]').each(function () {
        if ($(this).val() == '') {
          $(this).parent('.form__input').addClass('error')
        }
      });
    });
    $('.form__information input[required]').focus(function () {
      $(this).parent('.form__input').removeClass('error')
    });


  });
  
