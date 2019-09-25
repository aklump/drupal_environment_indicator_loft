/**
 * @file
 * Provide click handling for the environment_indicator.
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.environmentIndicatorLoft = {
    attach: function(context) {
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
      $toggle.once().click(function(e) {
        // Was the meta key held down? Set cookie?
        if (e.metaKey) {
          $indicator.fadeOut(function() {
            $indicator.fadeIn(function() {
              $indicator.fadeOut();
            });
          });

          // Cookie handling.
          var expiry = new Date(),
            time = expiry.getTime() + 600 * 1000;
          expiry.setTime(time);
          $.cookie('environment-indicator', 'hidden', {
            expires: expiry,
          });
        } else {
          $indicator.fadeOut();
        }
        return false;
      });
    },
  };
})(jQuery, Drupal);
