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
      trigger: "focus",
      template: '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'
    });

    $('.alert__btn').click(function () {
      $(this).parents('.alert').fadeOut(500);
    })

    $('.modal--video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      removalDelay: 160,
      preloader: false,
      showCloseBtn: true,
    });

    $('.modal--inline').magnificPopup({
      type: 'inline',
      showCloseBtn: true,
    });

    $('.se__join form button').click(function (e) {
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


  });

