/**
 * @file
 * Provide click handling for the environment_indicator.
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.environmentIndicatorLoft = {
    attach: function(context) {
      /**
       * Hide indicator for longer using a cookie.
       *
       * @param int duration
       *   The cookie duration in seconds.
       */
      function hideForLonger(duration) {
        $indicator.filter(':visible').fadeOut(function() {
          $indicator.fadeIn(function() {
            hideForRequest();
          });
        });

        // Cookie handling.
        var expiry = new Date(),
          time = expiry.getTime() + duration * 1000;
        expiry.setTime(time);
        $.cookie('Drupal.visitor.environment-indicator', 'hidden', {
          path: '/',
          expires: expiry,
        });
      }

      /**
       * Hide indicator for the duration of this request.
       *
       * @param callable callback
       *   A callback for when the fade is complete.
       */
      function hideForRequest(callback) {
        $indicator.fadeOut(function() {
          if (typeof callback === 'function') callback();
        });
      }

      var $indicator = $('.environment-indicator');

      // Hide a previously hidden indicator.
      var isHiddenByCookie = $.cookie('environment-indicator');
      if (isHiddenByCookie && $indicator.is(':visible')) {
        $indicator.hide();
        return;
      }

      // Handle the automatic manipulation.
      var autocookie = $indicator.data('autocookie');
      var autofade = $indicator.data('autofade');
      if (autofade) {
        setTimeout(function() {
          hideForRequest(function() {
            if (autocookie) {
              hideForLonger(autocookie);
            }
          });
        }, autofade * 1000);
      }

      // Setup click handlers.
      var cookieDuration = $indicator.data('manual_cookie');
      $('.js-environment-indicator__hide')
        .once()
        .dblclick(function(e) {
          hideForLonger(cookieDuration);
          return e.preventDefault();
        })
        .click(function(e) {
          // Was the meta key held down? Set cookie?
          if (e.metaKey) {
            // TODO Handle the switcher.
          } else {
            hideForRequest();
          }
          return e.preventDefault();
        });
    },
  };
})(jQuery, Drupal);
