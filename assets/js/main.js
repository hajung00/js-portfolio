/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $footer = $('#footer'),
    $main = $('#main'),
    settings = {
      // Parallax background effect?
      parallax: true,

      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20,
    };

  // Breakpoints.
  breakpoints({
    // xlarge: ['1281px', '1800px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px'],
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    // Turn on touch mode.
    $body.addClass('is-touch');

    // Height fix (mostly for iOS).
    window.setTimeout(function () {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer.
  breakpoints.on('<=medium', function () {
    $footer.insertAfter($main);
  });

  breakpoints.on('>medium', function () {
    $footer.appendTo($header);
  });

  // Header.

  // Parallax background.

  // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
  if (browser.name == 'ie' || browser.mobile) settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on('<=medium', function () {
      $window.off('scroll.strata_parallax');
      $header.css('background-position', '');
    });

    breakpoints.on('>medium', function () {
      $header.css('background-position', 'left 0px');

      $window.on('scroll.strata_parallax', function () {
        $header.css(
          'background-position',
          'left ' +
            -1 * (parseInt($window.scrollTop()) / settings.parallaxFactor) +
            'px'
        );
      });
    });

    $window.on('load', function () {
      $window.triggerHandler('scroll');
    });
  }

  // Main Sections: Two.

  // Lightbox gallery.
  $(function () {
    $('#1').click(function () {
      $('#modal1').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#2').click(function () {
      $('#modal2').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#3').click(function () {
      $('#modal3').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#4').click(function () {
      $('#modal4').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#5').click(function () {
      $('#modal5').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#6').click(function () {
      $('#modal6').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('#7').click(function () {
      $('#modal7').fadeIn();
      $('body').css('overflow', 'hidden');
    });
    $('.close_btn').click(function () {
      $('.modal').fadeOut();
      $('body').css('overflow', 'auto');
    });
  });

  $(function () {
    $('#title1').click(function () {
      if ($('#intro1').is(':visible')) {
        $('#intro1').fadeOut();
      } else {
        $('#intro1').fadeIn();
      }
    });

    $('#title2').click(function () {
      if ($('#intro2').is(':visible')) {
        $('#intro2').fadeOut();
      } else {
        $('#intro2').fadeIn();
      }
    });

    $('#title3').click(function () {
      if ($('#intro3').is(':visible')) {
        $('#intro3').fadeOut();
      } else {
        $('#intro3').fadeIn();
      }
    });
  });

  setInterval(function () {
    $('.title_img ').fadeIn(200, function () {
      $('.title_img').fadeOut(400);
    });
  }, 1500);
  // $window.on('load', function () {
  //   $('#two').poptrox({
  //     caption: function ($a) {
  //       return $a.next('h3').text();
  //     },
  //     overlayColor: '#2c2c2c',
  //     overlayOpacity: 0.85,
  //     popupCloserText: '',
  //     popupLoaderText: '',
  //     selector: '.work-item a.image',
  //     usePopupCaption: true,
  //     usePopupDefaultStyling: false,
  //     usePopupEasyClose: false,
  //     usePopupNav: true,
  //     windowMargin: breakpoints.active('<=small') ? 0 : 50,
  //   });
  // });
})(jQuery);
