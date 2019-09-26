/**
 * @file
 * Provide click handling for the environment_indicator.
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.environmentIndicatorLoft = {
    attach: function(context) {
      function hideForLonger() {
        $indicator.fadeOut(function() {
          $indicator.fadeIn(function() {
            hideForRequest();
          });
        });

        // Cookie handling.
        var expiry = new Date(),
          time = expiry.getTime() + 600 * 1000;
        expiry.setTime(time);
        $.cookie('environment-indicator', 'hidden', {
          expires: expiry,
        });
      }

      /**
       * Hide indicator for the duration of this request.
       */
      function hideForRequest() {
        $indicator.fadeOut();
      }

      var $indicator = $('.environment-indicator');

      // Hide a previously hidden indicator.
      var isHiddenByCookie = $.cookie('environment-indicator');
      if (isHiddenByCookie) {
        $indicator.hide();
        return;
      }

      // Setup for toggle interaction.
      var $toggle = $('.js-environment-indicator__hide');

      // Single click hides until next page load.
      $toggle.once().dblclick(function(e) {
        hideForLonger();
      });

      $toggle.once().click(function(e) {
        // Was the meta key held down? Set cookie?
        if (e.metaKey) {
          // TODO Handle the switcher.
        } else {
          hideForRequest();
        }
        return false;
      });
    },
  };
})(jQuery, Drupal);
