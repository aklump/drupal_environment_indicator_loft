/**
 * @file
 * Provide click handling for the environment_indicator.
 */

(function($, Drupal, cookies) {
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
        cookies.set('Drupal.visitor.environment-indicator', 'hidden', {
          path: '/',
          expires: expiry,
        });
      }

      /**
       * Hide indicator for the duration of this request.
       *
       *   A callback for when the fade is complete.
       * @param callback
       */
      function hideForRequest(callback) {
        $indicator.fadeOut(function() {
          if (typeof callback === 'function') {
            callback();
          }
        });
      }

      var $indicator = $('#environment-indicator');

      // Hide a previously hidden indicator.
      var isHiddenByCookie = cookies.get('environment-indicator');
      if (isHiddenByCookie && $indicator.is(':visible')) {
        $indicator.hide();
        return;
      }

      // Handle the automatic manipulation.
      var throttle = $indicator.data('throttle');
      var autofade = $indicator.data('autofade');
      if (autofade) {
        setTimeout(function() {
          hideForRequest(function() {
            if (throttle) {
              hideForLonger(throttle);
            }
          });
        }, autofade * 1000);
      }

      // Setup click handlers.
      const cookieDuration = $indicator.data('manual_cookie');
      let timer = 0;
      let prevent = false;

      $(once('EnvironmentIndicatorLoft', '.js-environment-indicator__hide'))
        .dblclick(function(e) {
          clearTimeout(timer);
          prevent = true;
          hideForLonger(cookieDuration);
          return e.preventDefault();
        })
        .click(function(e) {
          timer = setTimeout(() => {
            if (!prevent) {
              if (e.metaKey) {
                // TODO Handle the switcher.
              } else {
                hideForRequest();
              }
            }
            prevent = false;
          }, 200);
          return e.preventDefault();
        });
    },
  };
})(jQuery, Drupal, Cookies);
